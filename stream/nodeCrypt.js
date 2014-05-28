/**
 * Created by jk on 16/04/14.
 */

var phrase = process.argv[2];

var crypto = require('crypto');

var stream = crypto.createDecipher('aes256', phrase);

process.stdin
    .pipe(stream)
    .pipe(process.stdout);


