/**
 * Created by jk on 02/04/14.
 */

"use strict";

var q = require("q");

var defer = q.defer();

function reportError(error) {

    console.log(error.message);
}

defer.promise.then(null, reportError);

setTimeout(defer.reject, 300, new Error("REJECTED!"));

