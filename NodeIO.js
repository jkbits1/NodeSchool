/**
 * Created by jk on 07/03/14.
 */

var fs = require('fs');

var count = 0;

var fileName = process.argv[2];

var fileContents = fs.readFileSync(fileName).toString();

// create an array where each line is an array item
var lines = fileContents.split('\n');

// subtract one as there will be one more array item than the number of newlines
count = lines.length - 1;

console.log(count.toString());

