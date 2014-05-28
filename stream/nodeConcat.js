/**
 * Created by jk on 08/04/14.
 */

"use strict";

var concat = require('concat-stream');

function handleBuffer(buffer){

    console.log(buffer.toString().split('').reverse().join(''));
}

process.stdin.pipe(concat(handleBuffer));

