/**
 * Create a function that takes the age in years and returns the age in days.
 *
 * Examples => 65 years = 23725 days
 *
 * Hint => 1 year = 365 days
 * 
 * Note =>
 *      - Use 365 days as the length of a year for this challenge.
        - Ignore leap years and days between last birthday and now.
        - Expect only positive integer inputs.
 */

function age(years) {
  let days = years * 365;
  return days;
}

let ans = age(65);
console.log("Years :", ans,"Days");
