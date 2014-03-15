/**
 * Created by jk on 14/03/14.
 */

"use strict";

module.exports = function(number){

    if (number < 10){

        return "0" + number;
    }

    return number.toString();
};
