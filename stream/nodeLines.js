/**
 * Created by jk on 07/04/14.
 */

"use strict";

var split = require('split');
var through = require('through');

var currentLine = 0;

function changeCase(line){

    currentLine++;

    if ((currentLine % 2) === 0) {

        this.queue(line.toString().toUpperCase());
    }
    else
    {
        this.queue(line.toString().toLowerCase());
    }

    this.queue('\n');
//        console.log(line);
}

process.stdin
    .pipe(split())
//    .on('data', console.log);
    .pipe(through(changeCase))
    .pipe(process.stdout);