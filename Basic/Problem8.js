{
  /*  
            Problem => Write a JavaScript Program to convert farenheit to celcius..
            
            example : 5 farenheit = -15.555555555555557 celcius
        
            Output sould be like :
            celcius is : <YOUR ANSWER>
    
            Hint => 1 farenheit = -17.22222222222222 celcius
            exersice => Do google how to convert farenheit to celcius. only find the formula.
          */
}

function FC(Farenhit) {
  const cel = ((Farenhit - 32) * 5) / 9;
  return cel;
}
let convert = FC(5);
console.log("Celcius is :", convert);
