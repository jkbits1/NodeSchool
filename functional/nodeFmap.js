/**
 * Created by jk on 23/04/14.
 */

"use strict";

module.exports = doubleAll;

function doubleAll(numbers){

    return numbers.map(function(currentValue){

        return (currentValue * 2);
    });
}