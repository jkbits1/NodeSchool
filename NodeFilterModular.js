/**
 * Created by jk on 07/03/14.
 */

"use strict";

var filter = require('./modFilter');

var folder = process.argv[2];
var extension = process.argv[3];

filter(folder, extension, function(err, files){

    if (err){

        console.error(err.message);
    }
    else{

         files.forEach(function(fileName){

             console.log(fileName);
         });
    }

});

