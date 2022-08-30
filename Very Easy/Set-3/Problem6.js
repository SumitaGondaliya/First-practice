/**
*   Given two arguments, return an array which contains these two arguments.

    Examples =>
        makePair(1, 2) ➞ [1, 2]
        makePair(51, 21) ➞ [51, 21]
        makePair(512124, 215) ➞ [512124, 215]
    
    Notes => Don't forget to return your answer.
    Hint => make Empty Array and push the arguments in it.


 */

function makePair(n1, n2) {
  const arr = [];
  arr.push(n1, n2);
  return arr;
}

let result = makePair(1, 2);
console.log("array contains", result);
