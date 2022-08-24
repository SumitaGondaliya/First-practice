{
  /*  
        Problem => Write a JavaScript  Program to perform all arithmetic operations.r.
        
        example : sum, sub, mul, div, mod
    
        Output sould be like :
        sum is : <YOUR ANSWER>
        sub is : <YOUR ANSWER>
        mul is : <YOUR ANSWER>
        div is : <YOUR ANSWER>
        mod is : <YOUR ANSWER>

        Exersice => Do google how to find mod of two number in javascript.
      */
}
function sumation(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
let ans = sumation(10, 15);
console.log("Sum is :", ans);

function substration(num1, num2) {
  const sub = num1 - num2;
  return sub;
}
let result = substration(50, 10);
console.log("Sub is :", result);

function multiplication(num1,num2){
  const multi=num1*num2
  return multi
}
let multresult=multiplication(60,12)
console.log("Mul is :",multresult)


function division(num1,num2){
  const div=num1/num2
  return div
}

let divans=division(50,2)
console.log("Div is:",divans)

function modular(num1,num2){
  const mod=num1%num2
  return mod
}
let modans=modular(60,8)
console.log("Mod is :",modans)