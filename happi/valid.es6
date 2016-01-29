/**
 * Created by jk on 02/11/15.
 */

//modules.exports = _exports;

var _exports = {
  start: err => {
    if (err) {
      throw err;
    }
  },
  main: main
};

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
    method: 'GET',
    path: '/chickens/{breed}',
    handler: function (req, reply) {
      reply("nobody here but us");
    },
    config: {
      validate: {
        params: {
          breed: joi.required()
        }
      }
    }
  });

  server.start(_exports.start);
}

module.exports = _exports;
