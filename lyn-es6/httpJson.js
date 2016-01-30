/**
 * Created by Jon on 30/01/16.
 */

"use strict";

(argv => {

  const http = require('http');
  const url = require('url');

  class Args {
    constructor (argv) {
      this.args = Array.prototype.slice.call(argv, 2);
    }
  }

  let args = new Args(argv).args;
  let port = args[0];

  let server = http.createServer((req, res) => {
    let input = "";
    let path = url.parse(req.url, true);
    let pathname = path.pathname;


    //console.log(req.url);
    //console.log(path);
    //console.log(`pathname: ${path.pathname}`);


    if (
    // true ||
      req.method === 'GET' &&
      path.pathname === '/api/parsetime') {

      let isoTime = path.query.iso;
      let dateInfo = new Date(isoTime);

      //console.log(isoTime);
      //console.log(path.query);

      let responseItem = {
        hour: dateInfo.getHours(),
        minute: dateInfo.getMinutes(),
        second: dateInfo.getSeconds()
      };

      res.end(JSON.stringify(responseItem));

      //req.on('data', (data) => {
      //  input += data.toString();
      //});
      //
      //req.on('end', () => {
      //  res.end(input.toUpperCase())
      //});
    }
    else {
      let dateInfo = new Date(path.query.iso); //path.query.unixtime
      let responseItem = {
        unixtime: dateInfo.getTime()
      };

      //console.log(isoTime);


      console.log(dateInfo);
      console.log(responseItem);

      res.end(JSON.stringify(responseItem));
    }


    //str.pipe(res);
  });

  server.listen(port, () => {

  });

})(process.argv);
