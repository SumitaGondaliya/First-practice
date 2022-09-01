/*Write a JS code to find the number of zeros*/

var arr = [[0,0,0],[1,1,0],[1,1,1]];
var count = 0;
for(var i=0;i<arr.length;i++){
  for(var j=0;j<arr[0].length;j++){
    count = arr[i][j]==0 ? count+1 : count; 
  }
}

console.log(count) 