/**
    Create a function that takes a boolean variable flag and returns it as a string.

    Examples => 
        boolToString(true) ➞ "true"
        boolToString(false) ➞ "false"

    Hint => use if/else statement and return the result accordingly.
 *
 */

function boolToString(flag) {
  let boolean = "";
  if (flag) console.log("True");
  else console.log("False");
  return boolean.toString;
}

let result = boolToString(true);
/*console.log("Returned flag value is", result);*/
