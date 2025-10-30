// ++++++++++++++++++++ CALCULATOR +++++++++++++++++++++++

// Basic Calculator with all arithmetic operations

// Addition function
function add(num1, num2) {
    return num1 + num2;
}

// Subtraction function
function subtract(num1, num2) {
    return num1 - num2;
}

// Multiplication function
function multiply(num1, num2) {
    return num1 * num2;
}

// Division function
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return num1 / num2;
}

// Modulus function (remainder)
function modulus(num1, num2) {
    if (num2 === 0) {
        return "Error: Cannot divide by zero";
    }
    return num1 % num2;
}

// Power function
function power(base, exponent) {
    return Math.pow(base, exponent);
}

// Square root function
function squareRoot(num) {
    if (num < 0) {
        return "Error: Cannot calculate square root of negative number";
    }
    return Math.sqrt(num);
}

// ++++++++++++++++++++ EXAMPLES +++++++++++++++++++++++

console.log("========== CALCULATOR EXAMPLES ==========\n");

// Addition examples
console.log("Addition:");
console.log("10 + 5 =", add(10, 5));
console.log("25.5 + 14.5 =", add(25.5, 14.5));
console.log();

// Subtraction examples
console.log("Subtraction:");
console.log("20 - 8 =", subtract(20, 8));
console.log("100 - 45.5 =", subtract(100, 45.5));
console.log();

// Multiplication examples
console.log("Multiplication:");
console.log("6 * 7 =", multiply(6, 7));
console.log("12.5 * 4 =", multiply(12.5, 4));
console.log();

// Division examples
console.log("Division:");
console.log("50 / 5 =", divide(50, 5));
console.log("100 / 8 =", divide(100, 8));
console.log("10 / 0 =", divide(10, 0)); // Error case
console.log();

// Modulus examples
console.log("Modulus (Remainder):");
console.log("17 % 5 =", modulus(17, 5));
console.log("20 % 4 =", modulus(20, 4));
console.log("10 % 0 =", modulus(10, 0)); // Error case
console.log();

// Power examples
console.log("Power:");
console.log("2 ^ 3 =", power(2, 3));
console.log("5 ^ 2 =", power(5, 2));
console.log("10 ^ 0 =", power(10, 0));
console.log();

// Square root examples
console.log("Square Root:");
console.log("√16 =", squareRoot(16));
console.log("√25 =", squareRoot(25));
console.log("√-4 =", squareRoot(-4)); // Error case
console.log();

// Complex calculation example
console.log("Complex Calculation:");
console.log("(10 + 5) * 2 - 8 / 4 =", subtract(multiply(add(10, 5), 2), divide(8, 4)));
console.log();

console.log("========== CALCULATOR READY TO USE ==========");
