/**
 * Created by Jon on 29/01/16.
 */

"use strict";

(argv => {
  var filterFolder = require('./module').filterFolder;

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
  let filter = args.getArg(1);

  filterFolder(folderName, filter, (err, list) => {
    //console.log(list);
    if (err) {
      throw err;
    }

    list.forEach(val => console.log(val));
  });
})(process.argv);
