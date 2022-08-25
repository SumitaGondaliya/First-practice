{
  /*  
                Problem => Write a JavaScript Program to Calculate Area of Square.
                
                example : 5 * 5 = 25 (here 5 is side of square)
            
                Output sould be like :
                area of square is : <YOUR ANSWER>
        
                Hint => 1 area of square = side * side
              
              */
}

function AofS(side) {
  const area = side* side;
  return area;
}
let ans = AofS(5);
console.log("Area of square is :", ans);
