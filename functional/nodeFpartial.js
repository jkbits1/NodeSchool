/**
 * Created by jk on 30/04/14.
 */

"use strict";

module.exports = logger;

function logger(namespace){

    function fn(){

//      Function.prototype.apply();

        var args2 = Array.prototype.slice.call(arguments);

        args2 = [namespace].concat(args2);

        return console.log.apply(console, args2);
    }

    return fn;
}


