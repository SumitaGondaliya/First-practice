/**
 * Write a function that takes an minutes and converts it to seconds.
 *
 * Examples => 5 min = 300 sec
 * Hint => 1 min = 60 sec
 */

function convert(minutes) {
  const sec = minutes * 60;
  return sec;
}

let ans = convert(5);
console.log("Seconds is = ", ans);
