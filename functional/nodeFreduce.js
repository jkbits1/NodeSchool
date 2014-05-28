/**
 * Created by jk on 24/04/14.
 */

"use strict";

//i [a, a, b]
//
//ret { a:2, b:1}

module.exports = countWords;

function countWords(inputWords){

    return inputWords.reduce(function(countedWords, word){

        if (countedWords[word] === undefined) {

            countedWords[word] = 1;
        }
        else {

            countedWords[word]++;
        }

        return countedWords;

    }, {});
}