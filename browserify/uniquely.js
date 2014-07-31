/**
 * Created by jk on 30/07/14.
 */

"use strict";

var uniq = require('uniq');

module.exports = function(input){

  var inputItems = input.split(",");

  return uniq(inputItems);
};