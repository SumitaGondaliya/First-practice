{
  /*  
        Problem => Write a JavaScript Program to convert feet to meter..
        
        example : 5 feet = 1.524 meter
    
        Output sould be like :
        Meter is : <YOUR ANSWER>

        Hint => 1 feet = 0.3048 meter
      */
}

function FtoM(feet) {
  const convert = 0.3048 * feet;
  return convert;
}

let con = FtoM(1);
console.log("Meter is :", con);
