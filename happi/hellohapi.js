/**
 * Created by jk on 28/10/15.
 */


var Hapi = require('hapi');
var server = new Hapi.Server();

var port = +(process.argv[2]);

server.connection({
  host: 'localhost',
  port: port
});

server.route({
  path: '/',
  method: 'GET',
  handler: function (req, reply) {
    reply(null, "Hello hapi");
  }
});

server.start(function () {

});
