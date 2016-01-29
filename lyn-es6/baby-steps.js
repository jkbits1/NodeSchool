/**
 * Created by Jon on 29/01/16.
 */

"use strict";

((argv) => {

  //var args = Array.from(argv);
  var args = Array.prototype.slice.call(argv, 2);

  var total = args.reduce((prev, val) => {
    return +(prev) + +(val);
  }, 0);


  console.log(total);
})(process.argv);
