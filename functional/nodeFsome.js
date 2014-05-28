/**
 * Created by jk on 24/04/14.
 */

"use strict";

module.exports = checkUsersValid;

function checkUsersValid(goodUsers){

    return function(submittedUsers){
        return submittedUsers.every(function(submittedUser){
            return goodUsers.some(function(goodUser){

                if (goodUser.id === submittedUser.id) {
                    return true;
                }

                return false;
            });
        });
    };
}