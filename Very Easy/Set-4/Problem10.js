/**
    Create a function that takes a base number and an exponent number and returns the calculation.

    Examples =>
        calculateExponent(5, 5) ➞ 3125
        calculateExponent(10, 10) ➞ 10000000000
        calculateExponent(3, 3) ➞ 27
    
    Notes =>
        - All test inputs will be positive integers.
        - Don't forget to return the result.
    
    Hint =>
        - The exponent of a number says how many times to use the number in a multiplication.
        - 5^2 = 5 x 5 = 25
        - 5^3 = 5 x 5 x 5 = 125
        - 10^4 = 10 x 10 x 10 x 10 = 10000
        - 3^5 = 3 x 3 x 3 x 3 x 3 = 243

        You can use the Math.pow() method to solve this challenge.
 */


        function calculateExponent(b,e)
        {
            return Math.pow(b,e)
        }
        let result=calculateExponent(3,3)
        console.log(result)
