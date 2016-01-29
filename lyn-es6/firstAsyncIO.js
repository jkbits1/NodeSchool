/**
 * Created by Jon on 29/01/16.
 */

"use strict";

(argv => {
  var fs = require('fs');

  class Args {
    constructor (argv) {
      this.args = Array.prototype.slice.call(argv, 2);
    }
  }

  let args = new Args(argv);
  let fileName = args.args[0];

  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err;
    }

    let lineCount = data.toString().split('\n').length;

    console.log(lineCount - 1);
  });

})(process.argv);
