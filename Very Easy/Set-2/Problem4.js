/**
 * You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
 * find the final points for the team and return that value.
 *
 * Examples =>
 *     points(1, 1) ➞ 5
 *     points(7, 5) ➞ 29
 *     points(38, 8) ➞ 100
 *
 * Hint => 2-pointers worth 2 points and 3-pointers worth 3.
 *
 */

/*
7*2 14   1*2  2  38*2 = 76
5*3 15   1*3  3  8* 3= 24  76+24=100
*/

function points(p1,p2){
 let points=(p1*2)+(p2*3)
 return points

}

let finalpoints=points(38,8)
console.log("Basket ball points are :",finalpoints)