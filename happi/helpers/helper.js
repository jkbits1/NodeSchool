/**
 * Created by jk on 31/10/15.
 */

module.exports = helper;

function helper (context) {
  var query = context.data.root.query;

  return query.name + query.suffix;
}
