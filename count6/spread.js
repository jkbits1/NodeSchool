/**
 * Created by jk on 07/11/15.
 */

var numbers = process.argv.slice(2);

var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);