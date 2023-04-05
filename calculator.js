let numberOne;
let numberTwo;
let operator;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(numberOne, numberTwo, operator) {
    switch(operator) {
        case "+":
            return add(numberOne, numberTwo);
            break;
        case "-":
            return subtract(numberOne, numberTwo);
            break;
        case "*":
            return multiply(numberOne, numberTwo);
            break;
        case "/":
            return divide(numberOne, numberTwo);
            break;
        default:
            console.log("ERROR");
            break;
    }
}