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
            add(numberOne, numberTwo)
            break;
        case "-":
            subtract(numberOne, numberTwo)
            break;
        case "*":
            multiply(numberOne, numberTwo)
            break;
        case "/":
            divide(numberOne, numberTwo)
            break;
        default:
            console.log("ERROR");
            break;
    }
}