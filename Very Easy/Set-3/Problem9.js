/**
   Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

   Eample =>
      divisibleByFive(5) ➞ true
      divisibleByFive(-55) ➞ true
      divisibleByFive(37) ➞ false
      
   Notes =>
      - Don't forget to return the result.
 */

function divisibleByFive(num) {
  return num % 5 === 0 ? "True" : "False";
}

let result = divisibleByFive(-55);
console.log("Value is divisble by 5 and", result);
