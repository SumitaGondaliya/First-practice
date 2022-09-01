/*Write a javascript code to find the power of a number using for loop*/


function Power(num,pow) {
    var res=1; 
    for(var i=0;i<pow;i++){
       res=res*num;
    }
    return res;
  }
  console.log(Power(6,10)); 
  console.log(Power(74,3)); 
  