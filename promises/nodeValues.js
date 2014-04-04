/**
 * Created by jk on 02/04/14.
 */

"use strict";

var q = require('q');

var defer = q.defer();

function attachTitle(arg) {

    return "DR. " + arg;
}

defer.promise
.then(attachTitle)
.then(console.log);

defer.resolve("MANHATTAN");
