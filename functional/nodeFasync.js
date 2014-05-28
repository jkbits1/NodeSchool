/**
 * Created by jk on 28/05/14.
 */

"use strict";

module.exports = loadUsers;

function loadUsers(userIds, load, done) {

    var users = [];

    for (var i = 0; i < userIds.length; i++) {

        users.push(load(userIds[i]));
    }

    return users;
}

