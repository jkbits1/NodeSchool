/**
 * Created by jk on 28/10/15.
 */

var hapi = require('hapi');
var inert = require('inert');
var path = require('path');

var port = +(process.argv[2]);

var server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: port
});

server.register(inert, function (err) {
  if (err) {
    throw err;
  }
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    file: path.join(__dirname, 'index.html')
  }
});

server.start(function (err) {
  if (err) {
    throw err;
  }
});