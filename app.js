const inputEl = document.querySelector("input");
const buttonsZone = document.querySelector(".div--buttons");
let operatorIsClicked = false;
let numClicked = false;
let currentNum = "";
let firstNum;
let secondNum;
let operator;

const numbers = createArray("7896543210");
const operators = createArray("/*+=");
createElements(numbers, "num");
createElements(operators, "operator");

document.addEventListener("click", (e) => {
    const { className, textContent } = e.target;
    if (className === "num") {
        let value = textContent;
        operatorIsClicked === false ?
            currentNum += value
            :
            firstNum ? secondNum = getNumber(value, currentNum) : firstNum = getNumber(value, currentNum);
    }
    else if (className === "operator") {
        operatorIsClicked = true;
        operator = textContent;
    }
    let answer = secondNum ? getAnswer(operator) : 0;
})

function createArray(_string) {
    let newArray = [];
    for (let char of _string) {
        newArray.push(char);
    }
    return newArray;
}

function createElements(_array, _type) {
    let s = "";
    _array.forEach( el => {
        s += `<button class="${_type}">${el}<button/>`;
    })
    buttonsZone.innerHTML += s ;
}

const getNumber = (_num, _currentNum) => (currentNum + value) * 1;
    
function getAnswer(_operator){
    let answer = 0;
    switch (_operator) {
        case "/":
            answer = firstNum / secondNum;
            break;
        case "*":
            answer = firstNum * secondNum;
            break;
        case "-":
            answer = firstNum - secondNum;
            break;
        case "+":
            answer = firstNum + secondNum;
            break;
        default:
            break;
    }
    return answer;
}