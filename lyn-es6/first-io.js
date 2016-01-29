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

    getArgs () {
      return this.args;
    }
  }

  let args = new Args(argv);
  let fileContents = fs.readFileSync(args.getArgs()[0]);

  //console.log();

  let lineCount = fileContents.toString().split('\n').length;

  console.log(lineCount - 1);

})(process.argv);
