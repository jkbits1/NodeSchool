/**
 * Created by jk on 17/04/14.
 */

"use strict";

var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var through = require('through');

var cipher = process.argv[2];
var phrase = process.argv[3];

var decipher = crypto.createDecipher(cipher, phrase);

var gunzip = zlib.createGunzip();

var tarParse = tar.Parse();

process.stdin
    .pipe(decipher)
    .pipe(gunzip)
    .pipe(tarParse);
//    .pipe(through(write))
//    .pipe(process.stdout);
//    .pipe(through(writeTest))

// this fn works with ".pipe(tarParse);" above
//
//tarParse.on('entry', function(entry){
//
//    if (entry.type !== 'File') {
//
////        console.log('not a file');
//
//        return;
//    }
//
//    var hash = crypto.createHash('md5', {encoding: 'hex'});
//
////        console.log(entry.props);
//
//    entry.pipe(hash)
//        .pipe(through(function(item){
//
//            this.queue(item + ' ');
//
//            this.queue(entry.path + '\n')
//
//        }))
//        .pipe(process.stdout);
//
//
//});

//function writeTest(item){
//
//    var self = this;
//
//    tarParse.write(item);
//
//    tarParse.on('entry', function(entry) {
//        console.log(entry.props);
//
//
//
//    });
//
//}

//function write(item){
//
//    var self = this;
//
//    console.log(item); //.toString()

//    tarParse.write(item);

//    item.pipe(tarParse);


    tarParse.on('entry', function(entry){

        if (entry.type !== 'File') {

//            console.log('not a file');

            return;
        }

        var hash = crypto.createHash('md5', {encoding: 'hex'});

//        console.log(entry.props);

//        entry.pipe(process.stdout);

        // invalid, entry is a stream, not a string
//        hash.update(entry);

        // pipe, into and out of hash, works
//        entry.pipe(hash).pipe(process.stdout);

//        entry.pipe(hash);

//        var h = hash
//            .read();
//            .digest('hex');
//
//        console.log(h);

//
//        console.log(hash.read());
//
//        self.queue(hash.read());



        entry.on('data', function(contents){

//            hash.pipe(process.stdout);

            hash.update(contents);

//            contents.pipe(hash);
        });

        entry.on('end', function(){

//            hash.pipe(process.stdout);

//            console.log('test');

            console.log(hash.digest('hex') + ' ' + entry.path);

//
//            self.queue(hash.digest('hex') + ' ');
//
//            self.queue(
////            JSON.stringify(
////                entry.props
////            )
//                    entry.props.path + '\n'
//            );
        });

    });


//}
