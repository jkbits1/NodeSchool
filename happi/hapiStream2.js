/**
 * Created by jk on 01/11/15.
 */

//babel start.es6 --out-file start.js --watch

var start = require('./start2.js');

//require('babel-core').transform("code", {
//  plugins: ["transform-es2015-arrow-functions"]
//});

//require('babel-core/register');

//var start = require('./start.es6');

start.main();