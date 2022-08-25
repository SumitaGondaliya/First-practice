{
  /*  
              Problem => Write a JavaScript Program to Calculate Area of Circle..
              
              example : 5 * 5 * 3.14 = 78.5
          
              Output sould be like :
              area of circle is : <YOUR ANSWER>
      
              Hint => 1 area of circle = 3.14 * r * r
            
            */
}

function Aofc(radius) {
  const Area = 3.14 * radius * radius;
  return Area
}

let ans = Aofc(5);
console.log("Area of circle is :", ans);
