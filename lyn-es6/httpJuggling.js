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

  let url1 = args.getArg(0);
  let url2 = args.getArg(1);
  let url3 = args.getArg(2);

  let results = [];
  let urls = [url1, url2, url3];

  let completedCalls = 0;

  const maxCalls = 3;

  urls.forEach((val, idx) => { getUrl(idx); });

  function getUrl (idx) {
    http.get(urls[idx], res => {
      let errorHandler = e => {
        console.log(`error: ${e.message}`);
      };

      results[idx] = "";

      res.on('data', (data) => {
        results[idx] += data.toString();
      });

      res.on('end', () => {
        completedCalls++;

        if (completedCalls === maxCalls) {
          results.forEach((val) => console.log(val));
        }
      });
    }).on('error', e => {
      return errorHandler(e);
    });
  }

})(process.argv);

