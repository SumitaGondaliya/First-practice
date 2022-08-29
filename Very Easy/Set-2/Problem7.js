/**
 * In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. 
   The farmer breeds three 
 * species:

      chickens = 2 legs
      cows = 4 legs
      pigs = 4 legs

   The farmer has counted his animals and he gives you a subtotal for each species.
   You have to implement a function that returns the total number of legs of all the animals.
 *
 * Examples =>
 *    animals(2, 3, 5) ➞ 36
 *    animals(1, 2, 3) ➞ 22
 *    animals(5, 2, 8) ➞ 50
 * 
   * Notes =>
   *  - Don't forget to return the result.
   *  - The order of animals passed is animals(chickens, cows, pigs).
   
   5*2=10
   2*4=8
   8*4=32
    
   * 
 */

function animals(c, c1, p) {
  let number = c * 2 + c1 * 4 + p * 4;
  return number;
}

let result = animals(2,3,5);
console.log("TOtal legs of chikens,cows and pigs are :", result);
