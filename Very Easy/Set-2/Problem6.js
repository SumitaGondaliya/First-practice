/**
 * Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
 *
 * Examples =>
 *      lessThan100(22, 15) ➞ true
 *      // 22 + 15 = 37
 *
 *      lessThan100(83, 34) ➞ false
 *      // 83 + 34 = 117
 *
 *      lessThan100(3, 77) ➞ true
 *      // 3 + 77 = 80
 *
 * Hint => Don't forget to return the result.
 */

function lessThan100(a, b) {
  let num = a + b < 100;
  return num;
}
result = lessThan100(22, 15);
console.log("Sum of both number is less than 100 and :", result);
result1 = lessThan100(83, 34);
console.log("Sum of both number is less than 100 and :", result1);
