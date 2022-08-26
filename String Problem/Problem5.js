{
  /*  
      Problem =>write javascript program to count number of alphabets, digits and special characters in string
      
      example : "Hello World 123" = 10 alphabets, 3 digits, 1 special character.

        Output sould be like :
        
        Alphabets: <YOUR ANSWER>
        Digits: <YOUR ANSWER>
        Special Characters: <YOUR ANSWER>

        exercise => do google search for "javascript count number of alphabets, digits and special characters in string"

        but don't copy paste code from google search.
            */
}

/*function Stringlength(string) {
  const char = string.length;
  return char;
}
let count = Stringlength("Hello World 123");
console.log("String length is:", count);*/

const string = "Hello World 12345";
let Acount = (string.match(/[A-za-z]/g), string.length);
console.log("Alphabates :", Acount);

let Dcount = (string.replace(/[^0-9]/g,'').length);
console.log("Digits :", Dcount);

const Sstring="Hello World _*%$#@!";
var Scount=(Sstring.match(/[@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g))
console.log(" Special character:", Scount.length);