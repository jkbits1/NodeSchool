/**
 * Created by jk on 02/11/15.
 */

//babel valid.es6 --out-file valid.js --watch

//var start = require('./valid');

//var _exports = {
//  start: err => {
//  },
//  main: main
//};

var hapi = require('hapi');
var joi = require('joi');

var port = process.arg[2];

var server = new hapi.Server();



function main() {

  server.connection({
    host: 'localhost',
    port: port
  });

  server.route({
    method: 'GET',
    path: '/chickens/{breed}',
    handler: function () {

    },
    config: {
      validate: {
        params: {
          breed: true
        }
      }
    }
  });

  server.start(function (err) {
    if (err) {
      throw err;
    }
  });
}

//modules.exports = _exports;


start.main();



