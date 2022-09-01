/**
 * Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
 *
 * Examples =>
 *     dividesEvenly(98, 7) ➞ true
 *    // 98/7 = 14
 *
 *   dividesEvenly(85, 4) ➞ false
 *   // 85/4 = 21.25
 *
 *  Hint => If reminder is 0 then it is divisible else not.
 */

function dividesEvenly(a, b) {
  return a % b === 0 ? "True" : "False";
}
let result = dividesEvenly(98, 7);
console.log("Value a is evenly divisble by b", result);
