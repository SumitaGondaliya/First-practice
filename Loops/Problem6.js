/*Write a JavaScript program to sum the multiples of  6 and 3 under 100.*/

var sum = 0;
for (var x = 0; x < 100; x++) {
  if (x % 3 === 0 || x % 6 === 0) {
    sum += x;
  }
}
console.log(sum);
