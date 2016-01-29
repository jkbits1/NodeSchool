/**
 * Created by jk on 02/11/15.
 */

var _exports = {
  start: err => {
    if (err) {
      throw err;
    }
  },
  handler: (req, reply) => {
    reply("login successful");
  },
  main: main
};

module.exports = _exports;

var hapi = require('hapi');
var joi = require('joi');

var port = +(process.argv[2]);
var server = new hapi.Server();

function main() {

  server.connection({
    host: 'localhost',
    port: port
  });

  server.route({
    method: 'POST',
    //method: 'GET',
    path: '/login',
    handler: _exports.handler,
    config: {
      validate: {
        payload: joi.object().keys({
          isGuest: joi.boolean(),
          username: joi.string()
            .when('isGuest', {is: false, then: joi.required()}),
          password: joi.string().alphanum(),
          accessToken: joi.string().alphanum()
        })
        .without('password', 'accessToken')
        .options({allowUnknown: true})

          //{ isGuest: joi.boolean() }
      }
    }
  });

  server.start(_exports.start);
}