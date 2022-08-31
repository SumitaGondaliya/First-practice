/**
 * Create a function that accepts an array and returns the last item in the array.
 *
 * Examples =>
 *  lastItem([1, 2, 3, 4, 5]) ➞ 5
 *  lastItem([7, 9, 0, -2]) ➞ -2
 *  lastItem(["hello", "world", "!"]) ➞ "!"
 *
 *
 *
 */

 function getLastItem(array)
  {
	let num = array.length -1;
	return array[num]
 }
 let result=getLastItem(["helllo","World","i"])
 console.log("Last index of array is",result)