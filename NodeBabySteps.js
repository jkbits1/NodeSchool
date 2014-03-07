/**
 * Created by Jon on 17/02/14.
 */

var total = 0;

for (var i = 2; i < process.argv.length; i++)   {

    total += Number(process.argv[i]);
}



 console.log(total);


