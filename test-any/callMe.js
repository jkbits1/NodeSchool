/**
 * Created by jk on 30/05/15.
 */

var test = require('tape');

var repeat = require(process.argv[2]);

var repeatCount = 4;
var count = 0;

test('repeat', function (t) {
  t.plan(repeatCount);

  repeat(repeatCount, function () {
    //console.error("called:", count);
    t.pass("called:");

    count++;
  });
});
