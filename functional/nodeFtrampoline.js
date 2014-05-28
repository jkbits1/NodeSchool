/**
 * Created by jk on 27/05/14.
 */

"use strict";

module.exports = start;

function repeat(operation, num){

    if (num <= 0) {

        return;
    }

    operation();

//    return repeat(operation, --num);

    var nextstep = repeat.bind(undefined, operation, --num);

    return nextstep;
}

function trampoline(fn) {

    var rpt = repeat(this.operation, this.num);

    while (rpt){

        rpt = rpt();
    }
}

function start(operation, num){

    var info = {

        operation: operation,

        num: num
    };

    trampoline.call(info, operation);

}

//start(function(){
//
//    console.log("t");
//},
//    2
//    //0 - works
////    1 - works
//);
