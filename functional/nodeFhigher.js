/**
 * Created by jk on 23/04/14.
 */

"use strict";

module.exports = repeat;

    function repeat(fn, num){

        if (num === 1){

            return fn();
        }
        else

        {
            repeat(fn,
                    num - 1
            );

            fn();
        }
    }

