/**
 * Created by jk on 07/03/14.
 */

"use strict";

var fs = require('fs');

var path = require('path');

var folder = process.argv[2];

var filter = "." + process.argv[3];

fs.readdir(folder, function(err, list){

    if (err){

        console.error(err.message);
    }
    else {

        for (var i = 0; i < list.length; i++){

            if (path.extname(list[i]) === filter) {

                console.log(list[i]);
            }
        }

    }

});

