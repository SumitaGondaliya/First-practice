{
  /*  
          Problem => Write a JavaScript Program to convert celcius to farenheit.
          
          example : 5 celcius = 41 farenheit
      
          Output sould be like :
          farenheit is : <YOUR ANSWER>
  
          Hint => 1 celcius = 1.8+32 farenheit
          exersice => Do google how to convert celcius to farenheit. only find the formula.
        */
}

function CtoF(celcius) {
  const con = celcius * 1.8 + 32;
  return con;
}
let ans = CtoF(5);
console.log("Farenhit is :", ans);
