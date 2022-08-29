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


function giveMeSomething(str3){
    const str1 = 'Something';
    const str2=  '  ';
    const str3= str1.concat(str1,str2,str3);
    return str1,str2,str3

}

let string=giveMeSomething(Bob jane)
console.log("concatenated string is :",string)