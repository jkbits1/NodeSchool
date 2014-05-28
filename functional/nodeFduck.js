/**
 * Created by jk on 24/04/14.
 */

"use strict";

module.exports = duckCount;

function duckCount(){

//    console.log(arguments.toString());
//
//    console.log(arguments.length);
//
//    return;
//
    return duckCheck(arguments);
}

function duckCheck(args){

    var hasOwnQuack = 0;

//    console.log(args.toString());

//    console.log(JSON.stringify(args));

//    console.log(args.length);

//    return;

    if (!args || args.length <= 0) {

        return 0;
    }

//    console.log(args[0].toString());

//    console.log(JSON.stringify(args[0]));

//    return;

    if (duckTest(args[0])) {

        hasOwnQuack = 1;

//        console.log("found own quack");
    }

    args = Array.prototype.slice.call(args, 1);

    return hasOwnQuack + duckCheck(args);
}

function duckTest(item){

    var hasOwnQuack = false;

// this first clause seems to reject some valid objects. Don't know why this is the case.
    // the second clause seems to get test correct all the time.

//    if (Object.getPrototypeOf(item) === Object.prototype) {
//
//
//        if (item.hasOwnProperty('quack')){
//
////            return (item.quack !== false);
//
//            hasOwnQuack = true;
//        }
//        else {
//
//            if (item.quack) {
//
//                console.log(JSON.stringify(item));
//            }
//        }
//    }
//    else {

        if (Object.prototype.hasOwnProperty.call(item, 'quack')){

//            return (item.quack !== false);

            hasOwnQuack = true;
        }
//    }

    if (hasOwnQuack){

//        console.log(JSON.stringify(item));

        return true;
//        (item.quack !== false);
    }

    if (item.quack){

//        console.log("inherited quack");
    }
    else {

//        console.log("??" + JSON.stringify(item));
    }

    return false;
}