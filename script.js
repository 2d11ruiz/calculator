let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let numOne;
let operator;
let numTwo;

let operate = (numOne, operator, numTwo) => {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);
        case "-":
            return subtract(numOne, numTwo);
        case "*":
            return multiply(numOne, numTwo);
        case "/":
            return divide(numOne, numTwo);
    }
}