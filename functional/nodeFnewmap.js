/**
 * Created by jk on 23/05/14.
 */

"use strict";

module.exports =
    function newMap(arr, fn){

        var reduceCallback = function(prev, cur, index, arr){

        prev.push(fn(cur));

        return prev;
    };

    return arr.reduce(reduceCallback, []);

};

