/**
 * Created by jk on 01/11/15.
 */

//babel start.es6 --out-file start.js --watch


var hapi = require('hapi');
var fs = require('fs');
var rot13 = require('rot13-transform');
//require('babel-core').transform("code", {
//  plugins: ["transform-es2015-arrow-functions"]
//});

//require('babel-core/register');

//var start = require('./start.es6');
var start = require('./start.js');

var port = +(process.argv[2]);
var filePath = "test.txt";

var server = new hapi.Server();

server.connection({
  host: 'localhost',
  port: port
});

server.connections.forEach(function (val) {
  //console.log(val);
});

server.route({
  method: 'GET',
  path: '/',
  handler: function (req, reply) {
    var rot13stream =
      fs.createReadStream(filePath)
        .pipe(rot13());

    //rot13stream.pipe(reply);
    reply(rot13stream);
  }
});

server.start(start.start);