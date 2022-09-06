/**
   ---- Is the Number Even or Odd? ----
   
   Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

   Examples =>
         isEvenOrOdd(2) ➞ "even"
         isEvenOrOdd(3) ➞ "odd"
         isEvenOrOdd(8) ➞ "even"
         isEvenOrOdd(7) ➞ "odd"

   Notes =>
         - Don't forget to return the result.
   
   Hint => 
         - You can use the % (modulo) operator to check if a number is even or odd.
 */

function isEvenOrOdd(num) {
  return num % 2 == 0 ? "Even" : "odd";
}
let result = isEvenOrOdd(3);
console.log("Number is", result);
