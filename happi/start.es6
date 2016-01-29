/**
 * Created by jk on 01/11/15.
 */

//module.exports = err => if err throw err
module.exports = {
    basic: x => x + 3,
    start: err => {
        if (err) {
            throw err;
        }
    }
    }
