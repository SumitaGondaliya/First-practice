/**
 * Create a function that takes a number as an argument, increments the number by +1 and returns the result.
 *
 *  Examples => 0 ➞ 1
 *  Examples => 9 ➞ 10
 * 
 *  Hint => Don't forget to return the result.
 * 
 *  addition(0) ➞ 1
    addition(9) ➞ 10
    addition(-3) ➞ -2
 */

function addition(num) {
  let add = ++num;
  return add;
}
let ans = addition(-3);
console.log("Incremented value is :", ans);
