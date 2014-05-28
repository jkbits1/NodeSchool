/**
 * Created by jk on 30/04/14.
 */

"use strict";

module.exports = function namespaceLog(namespace) {

    return console.log.bind(console, namespace);
}

//var newlog = bin("INFO: ");
//
//newlog("the quick brown fox");


//function list() {
//    return Array.prototype.slice.call(arguments);
//}
//
//var list1 = list(1, 2, 3); // [1, 2, 3]
//
////  Create a function with a preset leading argument
//var leadingThirtysevenList = list.bind(undefined, 37);
//
//var list2 = leadingThirtysevenList(); // [37]
//var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]