/*Write a javascript code to find the largest number in an array*/



var arr = [8,5,7,63,48,1,0,568,124,78201,856974];  
var large = arr[0];
for(var i=0;i<arr.length;i++){
   large = arr[i]>large ? arr[i]:large; 
}
console.log(large) 
