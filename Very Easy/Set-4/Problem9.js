/**
  The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the
   if... else... statement.

   It is written in the format:
      condition ? result_if_true : result_if_false
   
   Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.


   Problem => Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.

   Examples =>
      yeah_nope(true) ➞ "yeah"
      yeah_nope(false) ➞ "nope"
 */

function yeah_nope(b) {
  return b ? "yeah" : "nope";
}
let result=yeah_nope(false)
console.log("result is",result)
