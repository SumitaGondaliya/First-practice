{
  /*  
    Problem => Write a JavaScript program to swap values.
    
    example :
      x = 5 and y = 10
      after swap
      x = 10 and y = 5

    Hint => make third variable and store one's value in it and then swap
  */
}

let x=5;
let y=10;
let temp;

temp=x
x=y
y=temp

console.log("swapped value is->",x,y)
