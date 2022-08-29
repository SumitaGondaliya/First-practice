/**
 * Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

    Examples =>
        convert(1, 3) ➞ 3780
        convert(2, 0) ➞ 7200
        convert(0, 0) ➞ 0
    
    Hint => 60 seconds in a minute, 60 minutes in an hour
    Notes => Don't forget to return your answer.

 */

function convert(h, m) {
  let time = h * 3600 + m * 60;
  return time;
}

let result = convert(2, 0);
console.log("Total seconds are :", result);
