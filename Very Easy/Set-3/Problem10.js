/**
   Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

   Eample =>
        divisible(1) ➞ false
        divisible(1000) ➞ true
        divisible(100) ➞ true

    Notes =>
        - Don't forget to return the result.
 */

function divisible(num) {
  return num % 100===0 ? "True" : "False";
}
let result = divisible(1000);
console.log("Number is divisible by 100 and :", result);
