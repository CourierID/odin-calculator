let numberOne;
let numberTwo;
let operator;
let displayNumber = 0;
let justEvaluated = false; 

const displayScreen = document.querySelector('.screen');

//Misc Buttons
const clearButton = document.querySelector('#clearButton');
const equalsButton = document.querySelector('#equalsButton');

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

//Operator Functions
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

function operate(numOne, numTwo, operator) {
    switch(operator) {
        case "+":
            return add(numOne, numTwo);
            break;
        case "-":
            return subtract(numOne, numTwo);
            break;
        case "*":
            return multiply(numOne, numTwo);
            break;
        case "/":
            return divide(numOne, numTwo);
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
    displayNumber = "";
}

clearButton.addEventListener('click', clear);


//Update number when number button pressed
function updateNumber(e) {
    if (displayNumber == "0") {
        displayNumber = "";
    }
    if (justEvaluated == true) {
        displayNumber = "";
        justEvaluated = false;
    }
    displayNumber += e.target.textContent;
    updateDisplay(displayNumber);
    numberTwo = displayNumber; 
}

oneButton.addEventListener('click', updateNumber);
twoButton.addEventListener('click', updateNumber);
threeButton.addEventListener('click', updateNumber);
fourButton.addEventListener('click', updateNumber);
fiveButton.addEventListener('click', updateNumber);
sixButton.addEventListener('click', updateNumber);
sevenButton.addEventListener('click', updateNumber);
eightButton.addEventListener('click', updateNumber);
nineButton.addEventListener('click', updateNumber);
zeroButton.addEventListener('click', updateNumber);


function chooseOperation(e) {
    numberOne = numberTwo;
    numberTwo = "";
    displayNumber = "0";
    updateDisplay(displayNumber);
    operator = e.target.textContent;
}

plusButton.addEventListener('click', chooseOperation);
minusButton.addEventListener('click', chooseOperation);
starButton.addEventListener('click', chooseOperation);
slashButton.addEventListener('click', chooseOperation);

function evaluate() {
    if (numberOne != undefined && numberTwo != undefined) {
        displayNumber = operate(Number(numberOne), Number(numberTwo), operator);
        updateDisplay(displayNumber);
        justEvaluated = true;
    }
}

equalsButton.addEventListener('click', evaluate);