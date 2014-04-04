/**
 * Created by jk on 02/04/14.
 */

"use strict";

var q = require('q');

var invalidJSON = process.argv[2];

q.fcall(JSON.parse, invalidJSON).then(null, console.log);


