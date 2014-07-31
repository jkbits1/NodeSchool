/**
 * Created by jk on 30/07/14.
 */

"use strict";

var uniq = require('uniq');

var input = prompt();

var inputItems = input.split(",");

console.log(uniq(inputItems));
