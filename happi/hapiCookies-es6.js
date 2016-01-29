/**
 * Created by jk on 03/11/15.
 */

var hapi = require('hapi');
var joi = require('joi');

var port = +(process.argv[2]);
var server = hapi.Server();

server.connection({
  host: 'localhost',
  port: port
});

server.route({
  method: 'GET',
  path: '/',
  handler: function () {
    reply("done");
  }

});


server.start();

