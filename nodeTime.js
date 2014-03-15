/**
 * Created by jk on 25/02/14.
 */

"use strict";

var net = require("net");

var format = require("./modFormat");

var port = process.argv[2];

var date = new Date();

var server = net.createServer(function(socket){

    console.log(date.getFullYear().toString());

    // YYYY
    socket.write(date.getFullYear().toString());
    socket.write("-");

//    MM
    socket.write(format(date.getMonth()+1));
    socket.write("-");

//    DD
    socket.write(format(date.getDate()));
    socket.write(" ");

//    hh:mm
    socket.write(format(date.getHours()));
    socket.write(":");
    socket.write(format(date.getMinutes()));

    socket.end();

});

server.listen(Number(port));







