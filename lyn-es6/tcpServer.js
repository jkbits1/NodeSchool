/**
 * Created by Jon on 30/01/16.
 */

"use strict";

(argv => {
  var net = require('net');

  class Args {
    constructor(argv) {
      this.args = Array.prototype.slice.call(argv, 2);
    }

    getArg(idx) {
      return this.args[idx];
    }
  }

  class TimeInfo {
    formatTimeDateElement (timeItem) {

      if (Number(timeItem) < 10) {

        timeItem = "0" + timeItem;
      }

      return timeItem;
    }

  //  date format
  //  "YYYY-MM-DD hh:mm"
    getCurrentDate() {
      var dateInfo = new Date();

      var month = this.formatTimeDateElement(dateInfo.getMonth() + 1);
      var day = this.formatTimeDateElement(dateInfo.getDate());

      var dateOutput = dateInfo.getFullYear() + "-" + month + "-" + day;

      var hours = this.formatTimeDateElement(dateInfo.getHours());
      var mins = this.formatTimeDateElement(dateInfo.getMinutes());

      dateOutput += " " + hours + ":" + mins;

      return dateOutput;
    }
  }

  let args = new Args(argv);

  let port = args.getArg(0);

  let timeProvider = new TimeInfo();

  let server = net.createServer(conn => {
    let time = timeProvider.getCurrentDate();

    conn.write(time + "\n");
    conn.end();
  });

  server.listen(port, () => {
  });

})(process.argv);
