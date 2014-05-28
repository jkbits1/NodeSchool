/**
 * Created by jk on 07/04/14.
 */

"use strict";

var fs = require("fs");

var fileName = process.argv[2];

fs.createReadStream(fileName).pipe(process.stdout);



