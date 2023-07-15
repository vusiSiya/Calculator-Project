const inputEl = document.querySelector("input");
const numberBtns = document.querySelector(".buttons-numbers");
const operatorBtns = document.querySelector(".buttons-operators");
let operatorIsClicked = false;
let numClicked = false;
let currentNum = "";
let firstNum;
let secondNum;
let operator;
let className;

const numbers = createArray("7896543210");
const operators = createArray("/*-+=");
const numbersFragment = wrapElements(getElements(numbers, "num"));
const operatorsFragment = wrapElements(getElements(operators, "sign"));
numberBtns.appendChild(numbersFragment);
operatorBtns.appendChild(operatorsFragment); 

document.addEventListener("click", (e) => {
    const { className, textContent } = e.target;
    if (className === "num") {
        let value = textContent;
        operatorIsClicked === false ?
            currentNum += value
            :
            firstNum ? secondNum = getNumber(value, currentNum) : firstNum = getNumber(value, currentNum);
    }
    else if (className === "sign") {
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
function createEl(_el, _className, _text) {
    let newElement = document.createElement(_el);
    newElement.innerText = _text ? _text : "";
    newElement.className = _className;
    return newElement
};

function getElements(_array, _className) {
    className = _className;
    const elements = _array.map( (arrayEl, i) => {  
        let newElement = createEl("button",_className, arrayEl);
        return newElement;
    });
    return elements;
}
function wrapElements(elements) {
    let docFragment = document.createDocumentFragment();
    let newArray = [];
    let currentThree = [];
    
    elements.forEach( (el, i) =>{
        if( (i !==0 && i % 3 === 0) || (i == elements.length -1) ){
            let update = appendChildren(currentThree,docFragment,className);
            newArray.push(update);
            currentThree = [];
            currentThree.push(el);
        }
        else{
            currentThree.push(el);
        }   
    });
    return docFragment
}
function appendChildren(_elementsArray, _parentEl, className) {
    let wrapperDiv = createEl("div", `${className} container`);
    _elementsArray.forEach(element => wrapperDiv.appendChild(element))
    _parentEl.appendChild(wrapperDiv);
    return _parentEl;
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
