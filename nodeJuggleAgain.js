/**
 * Created by jk on 19/03/14.
 *
 *  NOTE:   This version of the answer delivers the result
 *          required by the intention of the test rather than
 *          the letter. It starts all gets at once, and collects
 *          responses in an asynchronous fashion.
 *
 */

"use strict";

var http = require("http");

var urls = [];
var responseValues = ["", "", ""];
var responseComplete = [false, false, false];

var currentResponse = 0;

var MAXURL = 3;

function handleResponse(i, response){

    response.on('data', function(chunk){

        responseValues[i] += chunk;
    });

    response.on('end', function(){

        responseComplete[i] = true;

        if (responseComplete[0] && responseComplete[1] && responseComplete[2]){

            for (var m = 0; m < MAXURL; m++){

                console.log(responseValues[m]);
            }
        }
    });
}

function loop1(i){

    urls[i] = process.argv[i+2];

    http.get(urls[i], function(response){

        handleResponse(i, response);
    });
}

for (var i = 0; i < MAXURL; i++){

    loop1(i);
}

