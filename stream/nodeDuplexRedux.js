/**
 * Created by jk on 14/04/14.
 */

"use strict";

var duplexer = require('duplexer');

var through = require('through');

module.exports = function(counter){

//    console.log(typeof counter)

//counter.on('data', console.log);

    var countryTotals = {};

//    var count = 0;

    var i = through(write, end);

    return duplexer(
//        process.stdout
//        null
//        process.stdin
//        counter
        i
        ,
        counter
    );

    function write(entry){

        if (countryTotals[entry.country] !== undefined) {

            countryTotals[entry.country]++;
        }
        else {

            countryTotals[entry.country] = 1;
        }
    }

    function end(){

        counter.setCounts(countryTotals);
    }

};