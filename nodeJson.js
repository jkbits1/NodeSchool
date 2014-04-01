/**
 * Created by jk on 14/03/14.
 */

"use strict";

var http = require("http");
var url = require("url");

var port = process.argv[2];

var server = http.createServer(function(req, resp){

    resp.writeHead(200,
        { 'Content-Type': 'application/json'});

    var reqUrl = "";
    var date = null;

    var qstringInfo = {};
    var hms = {};
    var unix = {};

    if (req.method === "GET"){

        reqUrl = req.url;

        qstringInfo = url.parse(reqUrl, true);

        if (qstringInfo.query.iso){

            date = new Date(qstringInfo.query.iso);

            if(qstringInfo.pathname === '/api/parsetime'){

                hms.hour = date.getHours();
                hms.minute = date.getMinutes();
                hms.second = date.getSeconds();

                resp.write(JSON.stringify(hms));
            }
            else
            if (qstringInfo.pathname === '/api/unixtime') {

                unix.unixtime = date.getTime();

                resp.write(JSON.stringify(unix));
            }
        }


    }

    resp.end();
});

server.listen(port);
