/**
 * Created by jk on 02/04/14.
 */

"use strict";

var q = require('q');

var invalidJSON = process.argv[2];

function parsePromised(jsonObject){

    var defer = q.defer();

    try {

        JSON.parse(jsonObject);

        defer.resolve();

    } catch (e){

        defer.reject(e);
    }

    return defer.promise;
}

parsePromised(invalidJSON).then(null, console.log);

