/**
    ---- Name Greeting! ----
    Write a program that takes as input the name of a person and prints a greeting to that person.

    Examples =>
        greeting("James") ➞ "Hello, James!"
        greeting("Jenny") ➞ "Hello, Jenny!"
        greeting("Margaret") ➞ "Hello, Margaret!"

    Notes =>
        - The input will always be a valid string.
        - If the name is "Bob", print "Hello, Bob!".
 
 */

function greeting(name) {
  let string = "Hello," + name
  return string
}

let result = greeting("Subh")
console.log("Greetings : ", result)
