let numberOne;
let numberTwo;
let operator;

const displayScreen = document.querySelector('.screen');

//Misc Buttons
const clearButton = document.querySelector('#clearButton');

//Operator Buttons
const plusButton = document.querySelector('#plusButton');
const minusButton = document.querySelector('#minusButton');
const starButton = document.querySelector('#starButton');
const slashButton = document.querySelector('#slashButton');

//Number Buttons
const oneButton = document.querySelector('#oneButton');
const twoButton = document.querySelector('#twoButton');
const threeButton = document.querySelector('#threeButton');
const fourButton = document.querySelector('#fourButton');
const fiveButton = document.querySelector('#fiveButton');
const sixButton = document.querySelector('#sixButton');
const sevenButton = document.querySelector('#sevenButton');
const eightButton = document.querySelector('#eightButton');
const nineButton = document.querySelector('#nineButton');
const zeroButton = document.querySelector('#zeroButton');

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

function updateDisplay(newText) {
    displayScreen.textContent = newText;
}

//Set screen number to 0 and clear number buffers
function clear() {
    displayScreen.textContent = "0";
    numberOne = 0;
    numberTwo = 0;
}

clearButton.addEventListener('click', clear);


