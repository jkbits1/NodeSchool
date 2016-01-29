/**
 * Created by jk on 30/05/15.
 */

var assert = require('assert');
var isCool = require(process.argv[2]);

//NOTE - all these options work
assert.equal(isCool(42), true, 'isCoolNumber should return true');
//assert.deepEqual(isCool(42), true, 'isCoolNumber should return true');
//assert(isCool(42) === true, 'isCoolNumber should return true');
