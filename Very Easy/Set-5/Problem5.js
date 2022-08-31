/**
   ---- Word without First Character ----

   Create a function that takes a word and returns the new word without including the first character.

   Examples =>
        wordWithoutFirstCharacter("hello") ➞ "ello"
        wordWithoutFirstCharacter("java") ➞ "ava"
        wordWithoutFirstCharacter("away") ➞ "eway"
    
    Notes =>
        - The first character of the word will always be a letter.
        - The word will always be at least one character long.
    
    Hint => 
        - Use the substring method to remove the first character.
        - Use the slice method to remove the first character.
        - Use the substr method to remove the first character.
    
        Refer these method of string to solve this problem. go to w3schools.com for more information.
 */

function wordWithoutFirstCharacter(string) {
  return string.slice(1, string.length)
}

let result = wordWithoutFirstCharacter("Hello")
console.log("string is", result)

function wordWithoutFirstCharacter(string)
{
    return string.substring(1)
}

let result1 = wordWithoutFirstCharacter("java")
console.log("string is", result1)

function wordWithoutFirstCharacter(string)
{
return string.substr(1)
}

let result2 = wordWithoutFirstCharacter("away")
console.log("string is", result2)
