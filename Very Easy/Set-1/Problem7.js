/**
 * Write a function that converts hours into seconds.
 *
 * Examples => 2 hrs = 7200 sec
 * Hint => 1 min = 60 sec
 * 
 * Notes
    - 60 seconds in a minute, 60 minutes in an hour
    - Don't forget to return your answer.   
 */

function timeconversion(hours) {
  let con = (hours*60)*60;
  return con;
}

let ans = timeconversion(2);
console.log("Given hour is", ans, "seconds");
