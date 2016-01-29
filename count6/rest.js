/**
 * Created by jk on 07/11/15.
 */


module.exports = function average(...nums) {
  var sum = nums.reduce((x, y) => x + y);

  return sum / nums.length;
};