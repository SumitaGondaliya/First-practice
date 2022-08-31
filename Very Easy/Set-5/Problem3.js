/**
 *   ---- String and Number Conversions ----
 * 
    You need to create two functions to substitute toString() and parseInt();
     A function called intToString() that converts integers into strings and 
     a function called stringToInt() that converts strings into integers.

     Examples =>
          intToString(1) ➞ "1"
          intToString(10) ➞ "10"
          intToString(100) ➞ "100"
          intToString(1000) ➞ "1000"
     
     
 */


          function intToString(n) 
          {
            return n.toString()
          }
          let result=intToString(100)
          console.log("Integers to string",result)
         
         
         function stringToInt(n1) 
         {
            return parseInt(n1)
         }
         let result1=stringToInt("1000")
         console.log("String to Integer",result1)