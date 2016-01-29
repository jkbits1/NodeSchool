/**
 * Created by jk on 30/05/15.
 */

var fancify = require(process.argv[2]);

var test = require('tape');

test('fancify test', function (t) {
  t.plan(3);

  t.equal(fancify('Hello'), '~*~Hello~*~');

  t.equal(fancify('Hello', true), '~*~HELLO~*~');

  t.equal(fancify('Hello', false, '!'), '~!~Hello~!~');

});

//var fancify = function (str, upper, newChar) {
//  var fancy = '~*~';
//
//  if (upper === true) {
//    str = str.toUpperCase();
//  }
//
//  if (newChar) {
//    fancy = '~' + newChar + '~';
//  }
//
//  return fancy + str + fancy;
//};
