/**
 * Created by jk on 18/02/14.
 */

"use strict";

var http = require("http");
var bl   = require("bl");

var url = process.argv[2];

var req = http.get(url, function(response){

    response.pipe(bl(function(err, data){

        if (err){

            console.error(err.message);
        }
        else{

            var result = data.toString();

            console.log(result.length);
            console.log(result);
        }

    }));
});