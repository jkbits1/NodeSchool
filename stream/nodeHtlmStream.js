/**
 * Created by jk on 11/04/14.
 */

"use strict";

//var fs = require('fs');

var through = require('through');

var trumpet = require('trumpet');

//var tr = trumpet();
//
//fs.createReadStream('test3.txt').pipe(tr);
//
//var ws = tr.select('tbody')
//    .createWriteStream();
////    .createStream();
////ws.end('<tr><td>rawr</td></tr>');
//
//fs.createReadStream('test.txt')
//    .pipe(ws);
//
//tr.pipe(process.stdout);
//
//return;


function write(data){

    this.queue(data.toString().toUpperCase());
}

var trumpetStream = trumpet();

//console.log(Boolean(process.stdin.isTTY));
//console.log(Boolean(process.stdout.isTTY));

//fs.createReadStream('test2.txt')
process.stdin
    .pipe(trumpetStream);

var loudStream = trumpetStream.select('.loud')
    .createStream();
//    .createReadStream();
//    .createWriteStream();

loudStream
    .pipe(through(write))
    // pipe converted data into original stream - not sure
    // how standard this action is.
    // later note: I think loudStream is a duplex, and
    // has both a read and a write stream. The relevant
    // stream is employed automatically.
    .pipe(loudStream);

//loudStream.end("12345");

// the data piped in these two lines is shown at the end
// of the original stream. can't see why this is so.
//fs.createReadStream('test.txt')
//    .pipe(loudStream);

//loudStream.pipe(process.stdout);
//
//return;

//fs.createReadStream('test2.txt')
//    .pipe(trumpetStream);
//    .pipe(process.stdout);
//
//return;

//var writeStream = trumpetStream.select('.loud').createWriteStream();

//fs.createReadStream('test.txt')
//    .pipe(writeStream)

//readStream.pipe(writeStream);


//
//readStream
//writeStream
//    .pipe(through(write))
//    .pipe(readStream)

//stream
//
//
trumpetStream
    .pipe(process.stdout);


