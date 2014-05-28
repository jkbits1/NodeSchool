/**
 * Created by jk on 24/05/14.
 */

"use strict";

//module.exports =
    function Spy(object, methodName){



        var oldMethod = object[methodName];

//    object[methodName] = oldMethod;

    object[methodName] = function(){

        res.count++;

      return oldMethod.apply(object, arguments);
    };

        var res = {

            count: 0
        };

return res;

};

//Spy.prototype.count =
////    this.count =
////count:
//    function() {
//
//        return 3;
//    };


//

Spy.count;


var spy = //new
    Spy(console, 'log');
//
console.log('test');

spy.count;

