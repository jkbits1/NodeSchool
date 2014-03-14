/**
 * Created by jk on 18/02/14.
 */

"use strict";

var http = require("http");

var url = process.argv[2];

var info = "";
var charCount = 0;

var req = http.get(url, function(response){

    response.on("data", function (data) {

        info += data.toString();
    });

    response.on("end", function(){

        console.log(info.length);
        console.log(info);
    });

}).on("error", function(e){

        console.error(e.message);

    });
