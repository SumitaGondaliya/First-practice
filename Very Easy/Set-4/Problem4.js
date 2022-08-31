/**
   Given two strings, firstName and lastName, return a single string in the format "last, first".

   Examples =>
        concatName("First", "Last") ➞ "Last, First"
        concatName("John", "Doe") ➞ "Doe, John"
        concatName("Mary", "Jane") ➞ "Jane, Mary"

    Notes => Don't forget to return your answer.
 *
 */

function concatName(txt1, txt2) {
  return (txt2 + ", ").concat(txt1);
}
let result = concatName("John", "Doe");
console.log("Formatted stringn is", result);
