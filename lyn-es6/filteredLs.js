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

    getArg (idx) {
      return this.args[idx];
    }
  }

  let args = new Args(argv);

  let folderName = args.getArg(0);
  let filter = "." + args.getArg(1);

  fs.readdir(folderName, (err, files) => {
    if (err) {
      throw err;
    }

    let txtFiles = files.filter(val => {
      return val.endsWith(filter);
    });

    txtFiles.forEach(val => {
      console.log(val);
    });
  });
})(process.argv);
