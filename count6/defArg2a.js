/**
 * Created by jk on 07/11/15.
 */

module.exports = (str, count = str.length) => {

  var exclams = "!".repeat(count);

  return str + exclams;
};