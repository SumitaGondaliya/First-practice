/**
   Create a function that returns true when num1 is equal to num2; otherwise return false.

   Eample =>
      isSameNum(4, 8) ➞ false
      isSameNum(2, 2) ➞  true
      isSameNum(2, "2") ➞ false

   Notes =>
      - Don't forget to return the result.
 */

function isSameNum(num1, num2) {
  return num1 === num2 ? "True" : "False";
}

let result = isSameNum(2, "2");
console.log("Given num is :", result);
