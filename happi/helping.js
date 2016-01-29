/**
 * Created by jk on 31/10/15.
 */

var hapi = require('hapi');
var vision = require('vision');
var handlebars = require('handlebars');
var path = require('path');

var port = +(process.argv[2]);
var server = new hapi.Server();
//{
//views: {
//  helpersPath: 'helpers'
//}
//}

server.connection({
  host: 'localhost',
  port: port
});

server.register(vision, function (err) {
  if (err) {
    throw err;
  }

  server.views({
    helpersPath: 'helpers',
    engines: {
      html: handlebars
    },
    path: path.join(__dirname, 'templates')
  });

  server.start(function (err) {
    if (err) {
      throw err;
    }
  });
});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    view: 'helping.html'
  }
});
