/**
 * Created by jk on 18/02/14.
 */

"use strict";

var http = require("http");

// get url from learnyounode argument
var url = process.argv[2];

var info = "";

var req = http.get(url, function(response){

    response.on("data", function (data) {

        info += data.toString();

        console.log(data.toString());
    });

    response.on("end", function(){

        //console.log("full data is: " + info);
    });

}).on("error", function(e){

        console.error(e.message);

    });
