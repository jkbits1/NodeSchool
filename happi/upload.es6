/**
 * Created by jk on 03/11/15.
 */

var _exports = {
  start: err => {
    if (err) {
      throw err;
    }
  },
  main: main
};

module.exports = _exports;

var hapi = require('hapi');
var joi = require('joi');

var port = +(process.argv[2]);

//var server = new hapi.Server('localhost', port, {cors: true});
var server = new hapi.Server(
  {
  connections: {
    routes: {
      cors: true
    }
  }
}
);

function main() {

  server.connection({
    //host: 'localhost',
    //host: '0.0.0.0',
    host: '127.0.0.1',
    port: port
  });

  server.route({
    method: 'POST',
    path: '/upload',
    handler: (req, reply) => {

      var body = "";
      var filename, headers;
      var replyDataObject = {};

      if (req.payload.file) {

        filename = req.payload.file.hapi.filename;
        headers = req.payload.file.hapi.headers;

        req.payload.file.on('data', data => {
          body += data;
        });

        req.payload.file.on('end', () => {
          replyDataObject.description = req.payload.description;
          replyDataObject.file = {
            data: body,
            filename: filename,
            headers: headers
          };

          //reply("uploaded" + body);
          reply(JSON.stringify(replyDataObject));
        });
      }
      else {
        reply("need a file");
      }

    },
    config: {
      validate: {
        params: {
          description: joi.string()
        }
      },
      payload: {
          output: 'stream',
          parse: true
          //, allow: 'multipart/form-data'
      }
    }
  });

  server.start(_exports.start);
}