/**
 * Created by jk on 08/03/14.
 */

"use strict";

var fs = require('fs');
var path = require('path');

var filteredFiles = [];

module.exports = function(folderName, fileExtension, callback){

    fileExtension = "." + fileExtension;

    fs.readdir(folderName, function(err, files){

        if (err) {

            callback(err);
        }
        else{

            files.forEach(function(fileName){

                if (path.extname(fileName) === fileExtension ){

                    filteredFiles.push(fileName);
                }
            });

            callback(null, filteredFiles);
        }
    });
};
