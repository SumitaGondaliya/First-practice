/**
     Create a function that calculates the area of a rectangle. If the arguments are invalid, 
     your function must return -1.

     Examples =>
          area(3, 4) ➞ 12
          area(10, 11) ➞ 110
          area(-1, 5) ➞ -1
          area(0, 2) ➞ -1
 */

function area(l, w) {
  return l < 1 || w < 1 ? -1 : l * w;
}

let result = area(0, 2);
console.log("area of rectangle is ", result);
