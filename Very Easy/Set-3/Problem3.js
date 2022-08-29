/**
     Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; 
     otherwise return false.

     Example =>
          profitableGamble(0.2, 50, 9) ➞ true
          profitableGamble(0.9, 1, 2) ➞ false
          profitableGamble(0.9, 3, 2) ➞ true
 */

function profitableGamble(prob, prize, pay) {
  return prob * prize > pay ? "true" : "False";
}

let result = profitableGamble(0.9, 3, 2);
console.log("Gamble progit value is :", result);
