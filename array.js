const fruits = [1,2,3,4,5,6];
function test(num){

    return num>5;
}
const array=fruits.findIndex(test)
console.log(array);