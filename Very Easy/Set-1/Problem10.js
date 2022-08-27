/**
 * Create a function that takes length and width and finds the perimeter of a rectangle.
 *
 * Examples =>
 *      findPerimeter(6, 7) ➞ 26
 *      findPerimeter(20, 10) ➞ 60
 *      findPerimeter(2, 9) ➞ 22
 *
 *  Hint => Perimeter is found by adding up the length and width and then multiplying by 2.
 */

function findPerimeter(length, width) {
  const peri = (length + width) * 2;
  return peri;
}

let perimeter = findPerimeter(2,9);
console.log("Perimeter of Rectangle is :", perimeter);
