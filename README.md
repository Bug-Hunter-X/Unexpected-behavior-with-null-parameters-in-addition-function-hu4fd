# Unexpected behavior with null parameters in addition function
This JavaScript code demonstrates unexpected behavior when using null values as parameters in an addition function.

## Bug Description
The function `foo` is designed to return 0 if either input `a` or `b` is 0 and the sum otherwise.  However, when null is passed as an argument, unexpected string concatenation occurs instead of type coercion to 0.

## Bug Reproduction
1. Copy and paste the `bug.js` code into a JavaScript environment.
2. Run the code.
3. Observe the unexpected outputs when null is passed as an argument.

## Solution
The solution involves explicitly checking for null values and coercing them to 0 using the `||` operator.

## Additional Notes
This illustrates the importance of careful type handling in JavaScript. Implicit type coercion can lead to unexpected results. Always explicitly handle potential null or undefined values to prevent unexpected behavior.