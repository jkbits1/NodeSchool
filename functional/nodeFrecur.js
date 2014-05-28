/**
 * Created by jk on 24/04/14.
 */

"use strict";

module.exports = reduce;

// basic recursion pattern to go through elements of an array
function reduce1(arr, fn, initial){

    if (!arr || arr.length === 0) {

        return [];
    }

//    console.log(arr[0]);

    return [arr[0]].concat(reduce(arr.slice(1)));
}

// basic recursion that also calls a fn
function reduce2(arr, fn, initial){

    if (!arr || arr.length === 0) {

        return [];
    }

//    fn(initial, arr[0], 0, arr);

//    console.log(arr[0]);

    return [arr[0]].concat(reduce(arr.slice(1)
        //                            , fn, arr
    ));
}

function reduce(arr, fn, initial) {

    return reduceRecur(arr, fn, initial, arr, 0);
}

function reduceRecur(arr, fn, initial, originalArray, index){

    if (!arr || arr.length === 0) {

        return initial;
    }

    initial = fn (initial, arr[0], index, originalArray);

    return reduceRecur(arr.slice(1), fn, initial, originalArray, ++index);

}

