const inputEl = document.querySelector("input");
const numberBtns = document.querySelector(".buttons-numbers");
const operatorBtns = document.querySelector(".buttons-operators");
let operatorIsClicked = false;
let numClicked = false;
let currentNum = "";
let firstNum;
let secondNum;
let operator;

const create = (_el) => document.createElement(_el);
const textAndClassName = (_newElement,_className,_text) =>{
    if(_text){
        _newElement.innerText = _text;
    }
    _newElement.className = _className; 
}
const appendChildren = (_array,_parentEl,className)=>{
    let wrapper = create("div");
    textAndClassName( wrapper,`${className} container`);
    _array.forEach(child => wrapper.appendChild(child));
    _parentEl.appendChild(wrapper);
    return _parentEl;
}

const createArray = (_string) =>{
    let newArray = [];
    for (let char of _string) {
        newArray.push(char);
    }
    return newArray;
}

//element rendering
const numbers = createArray("7896543210");
const operators = createArray("/*-+=");
const numbersParentFragmt = createBtnElements(numbers, "num");
const operatorsParentFragmt = createBtnElements(operators, "sign");
numberBtns.appendChild(numbersParentFragmt);
operatorBtns.appendChild(operatorsParentFragmt); 

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

function createBtnElements(_array, _type) {
    let className =  _type
    const elements = _array.map( (arrayEl, i) => {  
        let newElement = create("button");
        textAndClassName( newElement,className, arrayEl); // type void function, returning nothing.
        return newElement;
    })
    let wrapperFragment = document.createDocumentFragment();
    let newArray = [];
    let currentThree = []
    elements.forEach( (el, i) =>{
        if( (i !==0 && i % 3 === 0) || (i == elements.length -1) ){
            let update = appendChildren(currentThree,wrapperFragment,_type);
            newArray.push(update);
            currentThree = [];
            currentThree.push(el);
        }
        else{
            currentThree.push(el);
        }   
    });
    return wrapperFragment
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