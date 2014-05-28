/**
 * Created by jk on 07/04/14.
 */

"use strict";

var through = require('through');

function write(buf){

    return this.queue(buf.toString().toUpperCase());
}

process.stdin.pipe(through(write)).pipe(process.stdout);

