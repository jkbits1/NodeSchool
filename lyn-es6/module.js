/**
 * Created by Jon on 29/01/16.
 */

"use strict";

var fs = require('fs');
var path = require('path');

module.exports = {
  filterFolder: filterFolder
};

function filterFolder (folderName, filterText, cb) {
  var filterExt = "." + filterText;

  //console.log(filterExt);

  fs.readdir(folderName, (err, files) => {
    if (err) {
      return cb (err);
    }

    let txtFiles = files.filter(val => {
      return filterExt === path.extname(val);
    });

    //txtFiles.forEach(val => {
    //  console.log(val);
    //});

    return cb(null, txtFiles);
  });
};