/**
 * Created by jk on 30/05/15.
 */

var test = require('tape');
var feedCat = require(process.argv[2]);


test('test feeding behaviour', function (t) {

  t.plan(3);

  t.equal(feedCat('cake'), 'yum');
  t.equal(feedCat('chicken'), 'yum');

  t.throws(function () {
    feedCat('chocolate')
    },
    'this is not a correct food for cats!'
    );

  //t.end();
});

//var feedCat = function (food) {
//  if (food === 'chocolate') {
//    throw 'incorrect food!';
//  }
//
//  return 'yum';
//};