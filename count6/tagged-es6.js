/**
 * Created by jk on 07/11/15.
 */


var username = process.argv[2];
//var username = "matt";
var comment = process.argv[3];
//var comment = "programming tests";

var namePart = `<strong>${username} says</strong>:`;
var commentPart = ``;

var newStr = html`<b>${username} says</b>: "${comment}"`;

console.log(newStr);

function html(...strElems) {

  //console.log(strElems.length);

  //strToCheck.forEach(str => console.log(str));
  var staticElems = strElems[0];

  var newStr = staticElems[0] + strElems[1] + staticElems[1];

  //console.log(newStr);

  var newComment = strElems[2];
  //console.error(newComment);

  newComment = newComment.replace(/&/g, "&amp;");
  newComment = newComment.replace(/'/g, "&apos;");
  newComment = newComment.replace(/"/g, "&quot;");
  newComment = newComment.replace(/</g, "&lt;");
  newComment = newComment.replace(/>/g, "&gt;");

  //console.log(newComment);
  newComment += staticElems[2];

  return newStr + newComment;

}