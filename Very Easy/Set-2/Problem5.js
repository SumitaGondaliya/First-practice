/**
 * A student learning JavaScript was trying to make a function. His code should
 * concatenate a passed string name with string "Edabit" and store it in a variable called result.
 * He needs your help to fix this code.
 *
 * Examples =>
 *    nameString("Mubashir") ➞ "MubashirEdabit"
 *    nameString("Matt") ➞ "MattEdabit"
 *    nameString("javaScript") ➞ "javaScriptEdabit"
 *
 *
 */

function nameString(str) {
  let string = str.concat("Edabit");
  return string;
}

let result = nameString("javaScript");
console.log("student's concatenated string is:", result);
