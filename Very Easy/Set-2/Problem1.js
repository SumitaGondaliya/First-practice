/**
 * Write a function that returns the string "something" joined with a space " " and the given argument a.
 *
 * Examples =>
 *      giveMeSomething("is better than nothing") ➞ "something is better than nothing"
 *      giveMeSomething("Bob Jane") ➞ "something Bob Jane"
 *      giveMeSomething("something") ➞ "something something"
 *
 * Hint => join the string "something" with a space " " and the given argument
 */


function giveMeSomething(a){
let string="something" + " " + a
 return string
}

let result=giveMeSomething(" better than nothing")
console.log("special concatenated string is :",result)
