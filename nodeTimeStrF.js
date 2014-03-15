/**
 * Created by jk on 14/03/14.
 */

"use strict";

var net = require("net");
var strftime = require("strftime");

var port = process.argv[2];

var date = null;

var server = net.createServer(function(socket){

    date = new Date();

    socket.write(strftime("%F %H:%M", date));

    socket.end();
});

server.listen(port);
