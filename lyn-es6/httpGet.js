/**
 * Created by Jon on 29/01/16.
 */

"use strict";

(argv => {
  var http = require('http');

  class Args {
    constructor (argv) {
      this.args = Array.prototype.slice.call(argv, 2);
    }

    getArg (idx) {
      return this.args[idx];
    }
  }

  let args = new Args(argv);

  let url = args.getArg(0);

  //console.log(url);

  http.get(url, res => {
    let errorHandler = e => {
      console.log(`error: ${e.message}`);
    };

    res.on('data', (data) => {
      console.log(data.toString());
    });
  }).on('error', e => {
    return errorHandler(e);
  });


})(process.argv);

