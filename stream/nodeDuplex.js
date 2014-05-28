/**
 * Created by jk on 14/04/14.
 */

"use strict";

var childProc = require('child_process');
var duplexer = require('duplexer');

var spawn = childProc.spawn;

module.exports = function(cmd, args){

    var cp = spawn(cmd, args);

    return duplexer(cp.stdin, cp.stdout);
}

