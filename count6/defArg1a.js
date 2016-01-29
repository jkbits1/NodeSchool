/**
 * Created by jk on 07/11/15.
 */



module.exports = (lower = 0, upper = 1) => {

  var origLower = lower;

  console.log("orig:", lower, upper);

  if (lower <= 0) {
    upper += -lower;
    origLower = lower;
    lower = 0;
    console.log("new:", lower, upper);
  }

  return ((upper - lower) / 2) + origLower;
};