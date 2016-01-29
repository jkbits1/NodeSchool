/**
 * Created by jk on 30/10/15.
 */

var hapi = require('hapi');
var vision = require('vision');
var handlebars = require('handlebars');
var path = require('path');

var port = +(process.argv[2]);

var server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: port
});

server.register(vision, function (err) {
  if (err) {
    throw err;
  }

  server.views({
    engines: {
      html: handlebars
    },
    path: path.join(__dirname, 'templates')
  });
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
  view: "index.html"
  }
});

server.start(function (err) {
  if (err) {
    throw err;
  }
});
