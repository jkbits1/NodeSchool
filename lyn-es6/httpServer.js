/**
 * Created by Jon on 30/01/16.
 */

"use strict";

(argv => {

  const http = require('http');
  const fs = require('fs');

  class Args {
    constructor (argv) {
      this.args = Array.prototype.slice.call(argv, 2);
    }
  }

  let args = new Args(argv).args;
  let port = args[0];
  let file = args[1];

  let server = http.createServer((req, res) => {
    let str = fs.createReadStream(file);

    str.pipe(res);
  });

  server.listen(port, () => {

  });

})(process.argv);
