/**
  Create a function that takes two strings as arguments and return either true or false depending on
   whether the total number of characters in the first string is equal to the total number of characters
    in the second string.

  Examples =>
      comp("AB", "CD") ➞ true
      comp("ABC", "DE") ➞ false
      comp("hello", "edabit") ➞ false
    
  Hint => find lentgh of both strings and compare them.
 */

function comp(str1, str2) {
  return str1.length == str2.length ? "True" : "False";
}

let result = comp("Hello", "edabit");
let result1 = comp("AB", "CD");

console.log("String is", result);
console.log("String is", result1);
