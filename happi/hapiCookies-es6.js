/**
 * Created by jk on 03/11/15.
 */

var hapi = require('hapi');
var joi = require('joi');

var port = +(process.argv[2]);
var server = new hapi.Server();

var cookieName = "session";

server.connection({
  host: 'localhost',
  port: port
});

server.register({
  register: require('good'),
  options: options
  },
  (err) => {
    if (err) {
      throw err;
    }
  }
);

server.state(cookieName, {
  ttl: 10000,
  path: '/',
  encoding: 'base64json'
  //,domain: 'localhost'
  //,domain: 'http://localhost'
  ,domain: '127.0.0.1'
  //,domain: 'http://127.0.0.1'
});

server.route({
  method: 'GET',
  path: '/set-cookie',
  handler: (req, reply) => {
    var session = req.state.session;

    if (!session) {
      session = {
        key: 'makemehapi'
      }
    }

    reply("done").state(cookieName, session);
  }
  ,
  config: {
    state: {
      parse: true,
      failAction: 'log'
    }
  }
});

server.route({
  method: 'GET',
  path: '/check-cookie',
  handler: (req, reply) => {
    var session = req.state.session;

    if (session) {
      reply({
        user: 'hapi'
      });
    }
    else {
      reply(403);
    }
  }
  ,
  config: {
    state: {
      parse: true,
      failAction: 'log'
    }
  }
});

server.on('request-internal', (req, event, tags) => {
  if (tags.error && tags.state) {
    console.log(event);
    console.log(event.tags[0]);
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
});

var options = {
  opsInterval: 1000,
  reporters: [{
    reporter: require('good-console'),
    events: { log: '*', response: '*' }
  }, {
    reporter: require('good-file'),
    events: { ops: '*' },
    config: './test/fixtures/awesome_log'
  }, {
    reporter: 'good-http',
    events: { error: '*' },
    config: {
      endpoint: 'http://prod.logs:3000',
      wreck: {
        headers: { 'x-api-key' : 12345 }
      }
    }
  }]
};