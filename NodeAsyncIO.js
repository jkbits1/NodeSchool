/**
 * Created by jk on 07/03/14.
 */

"use strict";

var fs = require('fs');

var count = 0;

var fileName = process.argv[2];

fs.readFile(fileName, function(err, data){

    if (err){

        console.error(err.message);
    }
    else{

        var fileContents = data.toString();

        count = fileContents.split('\n').length-1;

        console.log(count);
    }
});

