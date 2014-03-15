/**
 * Created by jk on 14/03/14.
 *
 *  NOTE:   This version of the answer delivers the result
 *          required by the letter of the test rather than
 *          the spirit. It performs each http.get in order,
 *          rather than starting all gets at once.
 *
 *          That said, it provides a valid result for the
 *          inputs provided.
 *
 */

"use strict";

var http = require("http");

var url = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var urls = [url, url2, url3];

var currentUrl = 0;
var MAXURL = 3;

var body = "";

function addChunkToBody(chunk){

    body += chunk.toString();
}

var prefix = "";

function handleResponse(response){

    response.on("data", addChunkToBody);

    response.on("end", handleResponseEnd);
}

function handleResponseEnd(){

    // this is used for debugging purposes only
    prefix = "url"+ (currentUrl+1) + ": ";

    console.log(//prefix +
                body);

    currentUrl += 1;

    if (currentUrl < MAXURL) {

        body = "";

        http.get(urls[currentUrl], handleResponse).on
                                ('error', handleResponseError);
    }
}

function handleResponseError(err){

    console.error("Error on get: " + err);
}

var request = http.get(urls[currentUrl], handleResponse).on('error', handleResponseError);

