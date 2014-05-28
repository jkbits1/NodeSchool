/**
 * Created by jk on 23/04/14.
 */

"use strict";

module.exports = getShortMessages;

var shortMessages = [];

function getShortMessages(messages){

//    return

//    shortMessages =

    return messages.filter(function(messageContainer){

        if (messageContainer.message.length < 50) {
        return true;
        }

        return false;
    })
    .map(function(messageContainer){

        return messageContainer.message;
    });

    //['123', '456'];

}