/**
 * Created by jk on 28/05/14.
 */

"use strict";

module.exports = loadUsers;

function loadUsers(userIds, load, done) {

//    return done([{id:1, name:"one"}]);

    var processedCount = 0;
    var targetCount = userIds.length;

    var users = userIds.map(function(val, i, arr){

        return val;
    });

    function getUserInfo(user){

        var index = users.indexOf(user.id);

        users[index] = {id: user.id, name: user.name};

        processedCount++;

        if (processedCount >= targetCount){

            done(users);
        }

    }

    userIds.forEach(function(id, index, arr){

        load(id,
            getUserInfo
        );
    });

//    function showWaiting() {
//        console.log("waiting");
//    }
//
//    while (processedCount < 1 //targetCount
//        ){
//
//        setTimeout(showWaiting, 10);
//    }

    return;
}

