/**
 * Create a function that takes an array containing only numbers and return the first element.
 *
 * Examples => [1, 2, 3] => 1
 * 
    Notes :
       - The first element in an array has an index of 0.
 */

function array(arr) {
  let firstelement = arr[0];
  return firstelement;
}
const first = [1, 2, 3, 4, 5, 6];
let ans = array(first);
console.log("First element is :", ans);
