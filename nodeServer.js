/**
 * Created by jk on 14/03/14.
 */

"use strict";

var fs = require("fs");
var http = require("http");

var port = process.argv[2];

var filePath = process.argv[3];

var fileStream = fs.createReadStream(filePath);

var server = http.createServer(function(req, resp){

    fileStream.pipe(resp);

});

server.listen(port);