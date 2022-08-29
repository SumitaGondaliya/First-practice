/**
 * JavaScript has a logical operator &&. The && operator takes two boolean values, and
  returns true if both values are true.
   
Consider a && b:

   - a is checked if it is true or false.
   - If a is false, false is returned.
   - b is checked if it is true or false.
   - If b is false, false is returned.

   Otherwise, true is returned (as both a and b are therefore true ).
   The && operator will only return true for true && true.

   Make a function using the && operator.

   Examples =>
      andFunction(true, false) ➞ false
      andFunction(true, true) ➞ true
      andFunction(false, true) ➞ false
      andFunction(false, false) ➞ false

 */
function andFunction(a, b) {
  let number = a <= 10 && b >= 10;
  return number;
}

let result = andFunction(9, 1);
let result1 = andFunction(10, 50);
let result2 = andFunction(70, 20);
let result3 = andFunction(50, 20);

console.log("Values are :", result);
console.log("Values are :", result1);
console.log("Values are :", result2);
console.log("Values are :", result3);
