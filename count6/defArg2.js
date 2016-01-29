/**
 * Created by jk on 07/11/15.
 */


module.exports = function makeImportant(str, count = str.length) {

  var exclams = "!".repeat(count);

  return str + exclams;
};