/**
 * Created by jk on 14/03/14.
 */

"use strict";

var http = require("http");
var map = require("through2-map");

var port = process.argv[2];

var server = http.createServer(function(req, resp){

    if (req.method !== 'POST'){

        return resp.end("Only POST requests are supported.");
    }

    req.pipe(map(function(chunk){

        return chunk.toString().toUpperCase();
    })).pipe(resp);

});

server.listen(port);
