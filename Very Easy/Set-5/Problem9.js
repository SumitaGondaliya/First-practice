/**
   ---- Many Operators! ----

   Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters,
   num1, num2, and an operator. Use the operator on number 1 and 2.

   Examples =>
         arithmetic(2, 3, "+") ➞ 5
         arithmetic(10, 5, "-") ➞ 5
         arithmetic(2, 3, "*") ➞ 6
         arithmetic(10, 5, "/") ➞ 2
         arithmetic(10, 5, "%") ➞ 0
   
   Hint => use if/else conditions to solve this challenge.

 */

function arithmetic(num1, num2, sign) {
  if (sign === "+") {
    return num1 + num2;
  } else if (sign === "-") {
    return num1 - num2;
  } else if (sign === "*") {
    return num1 * num2;
  } else if (sign === "/") {
    return num1 / num2;
  } else if (sign === "%") {
    return num1 % num2;
  }
}
let answers=arithmetic(10,5,"/")
console.log("PAssed operated answer is",answers)
