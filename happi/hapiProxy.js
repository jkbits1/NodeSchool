/**
 * Created by jk on 31/10/15.
 */

var hapi = require('hapi');
var h202 = require('h2o2');

var port = +(process.argv[2]);

var server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: port
});

server.register(h202, function (err) {
  if (err) {
    throw err;
  }

  server.start(function (err) {
    if (err) {
      throw err;
    }
  });
});

server.route({
  method: 'GET',
  path: '/proxy',
  handler: {
    proxy: {
      host: 'localhost',
      port: '65535',
      protocol: 'http'
    }
  }
});

