/**
 * Created by jk on 08/04/14.
 */

"use strict";

var http = require('http');
var through = require('through');

var port = process.argv[2];

function write(buf){

    this.queue(buf.toString().toUpperCase());
}

var server = http.createServer(function(req, res){

    if (req.method === 'POST'){

        req.pipe(through(write)).pipe(res);
    }
    else
    {
        res.end('POST requests only are accepted.');
    }
});

server.listen(port);