/*Write a javascript code using for loop and function to print Even numbers in given array
*
*
*
*
*/

function even (arr) {
    for (var i=0;i<arr.length;i++){
      if(arr[i]%2==0){
        console.log(arr[i]); 
      }  
    }
  }
  var arr = [78,56,12,45,23,47,20,4,6]
  
  even(arr)
  console.log(arr)
  