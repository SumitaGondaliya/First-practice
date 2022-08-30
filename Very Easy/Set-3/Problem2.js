/**
    In this challenge, you must verify the equality of two different values given the parameters a and b.

    Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

    Numbers
    Strings
    Booleans (false or true)
    Special values: undefined, null and NaN

    What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

===> I learned === operator to check value and its type together....

    Implement a function that returns true if the parameters are equal, and false if they are not.

    Examples =>
        checkEquality(1, true) ➞ false
        // A number and a boolean: their type is different.

        checkEquality(0, "0") ➞ false
        // A number and a string: their type is different.

        checkEquality(1,  1) ➞ true
        // A number and a number: their type and value are equal.
 */

function checkEquality(a, b) {
  return a === b ? "True" : "false";
}

let result = checkEquality(undefined, undefined);
console.log("Given value is :", result);
