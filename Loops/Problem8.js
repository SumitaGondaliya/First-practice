//Create a function that takes a number n and returns the sum of all square numbers up to and including n.



function sumofsquare(num)
{
    let sum = 0;
    for (let i = 1; i <= num; i++)
        sum += (i * i);

    return sum;
}

let num = 6;
console.log("sum of sqaure is",sumofsquare(num));


