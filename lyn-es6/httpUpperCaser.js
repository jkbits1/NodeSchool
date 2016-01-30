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

  let server = http.createServer((req, res) => {
    let input = "";

    if (req.method === 'POST') {
      req.on('data', (data) => {
        input += data.toString();
      });

      req.on('end', () => {
        res.end(input.toUpperCase())
      });
    }
    else {
      res.end('posts only');
    }


    //str.pipe(res);
  });

  server.listen(port, () => {

  });

})(process.argv);
