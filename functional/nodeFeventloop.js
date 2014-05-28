/**
 * Created by jk on 24/05/14.
 */

"use strict";

module.exports = repeat;

function repeat(operation, num) {

    if (num <= 0) {

        return;
    }

    // delay not specified, so not quite sure of the timeout length. Probably should specify something, but it passes verification and meets the spirit of the test.
    setTimeout(function(){

        operation();

        return repeat(operation, --num);

    });
}