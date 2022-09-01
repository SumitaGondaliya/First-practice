/**
 * Create a function that takes voltage and current and returns the calculated power.
 *
 * Examples => circuitPower(230, 10) ➞ 2300
 * Hint => P = V * I  (power equals voltage times current)
 */

function circuitPower(voltage, current) {
  let power = voltage * current;
  return power;
}

let calculatedpower = circuitPower(230, 10);
console.log("Calucalated Power is :", calculatedpower);
