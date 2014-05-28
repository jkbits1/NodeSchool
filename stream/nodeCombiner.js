/**
 * Created by jk on 15/04/14.
 */

"use strict";

var combine = require('stream-combiner');
var through = require('through');

var zlib = require('zlib');

module.exports = function() {

    var currentGenre = null;

    var books = [];

//    process.stdin.pipe(process.stdout);

    var gzip = zlib.createGzip();

    return combine(
        through(write
            , end
)
        ,
        gzip
    )
        .on('error', function(err){

            console.log(err.message);
        } );

    function write (entry){

        handleEntry(entry, this);
    }

    function end(){

        handleEntry(
            JSON.stringify(
                {type :"genre", name: "not a genre"}
            )
            , this
        );

        this.queue(null);
    }
//
    function handleEntry(entry, queueOwner){

        var genreBooksList = {};
        var json = "";

        var item = JSON.parse(entry);

//        item.type === "genre" ?
//            console.log(item.name) :
//            console.log(entry);

        if (item.type === "genre"){

            if (currentGenre && books.length > 0) {

                // now have a complete list of books for previous genre

                genreBooksList.name = currentGenre;
                genreBooksList.books = books;

                json = JSON.stringify(genreBooksList);

//                console.log(json);

                queueOwner
                    .queue(json + "\n");
            }


            // clear array of books belonging to previous genre and set current genre
            books = [];
            currentGenre = item.name;
        }
        else {

            // add book to current genre
            books.push(item.name);
        }
    }
};

//var stream = combine(a, b, c, d);

