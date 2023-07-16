const inputEl = document.querySelector("input");
const answerEl = document.querySelector(".answer-El");
const numberBtns = document.querySelector(".number-btns");
const operatorBtns = document.querySelector(".operator-btns");
let operatorIsClicked = false;
let numClicked = false;
let currentNum = "";
let firstNum;
let secondNum;
let operator;
let showAnswer = false;
let className;
const getNumber = (_currentNum) => (_currentNum ) * 1;
const numbers = createArray("7896543210 ");
const operators = createArray("/*%+-= ");
const numbersFragment = wrapElements(getElements(numbers, "num"));
const operatorsFragment = wrapElements(getElements(operators, "sign"));
numberBtns.appendChild(numbersFragment);
operatorBtns.appendChild(operatorsFragment); 

document.addEventListener("click", (e) => {
    const { className, textContent } = e.target;
    let value = textContent;
    if (className === "num") {
        currentNum = firstNum && operatorIsClicked ? value : currentNum + value;
    }
    else if (className === "sign") {
        operatorIsClicked = true;
        operator = value;
        
    }
    operatorIsClicked  && (currentNum =="" || value != operator) ?
        secondNum = getNumber(currentNum)
        :
        firstNum = getNumber(currentNum) 
    let answer = secondNum ? getAnswer(operator) : currentNum
    answerEl.textContent = answer;
    inputEl.textContent = answer * 1
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
    let num = className != "sign" ? 3 : 2;
    elements.forEach( (el, i) =>{
        if( (i !==0 && i % num === 0) ){
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
function appendChildren(_elementsArray, _parentEl, _className) {
    let wrapperDiv = createEl("div", `${_className} container`);
    _elementsArray.forEach(element => wrapperDiv.appendChild(element))
    _parentEl.appendChild(wrapperDiv);
    return _parentEl;
}


    
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
            case "=":
            showAnswer= true;
            break;
        default:
            break;
    }
    return answer;
}

// Handling button numbers state:


// Recieving Input and returning an answer.
    // recieving an integer, as a string,
    // we keep adding to number characters to  string until the user clicks an operator button.
    // when user clicks the operator button, we multiply the currentNum string by 1, turning it to an integer; 
    // we save the operator character, and save the currentNum char as the firstNum;
    // the currentNum string is then initialised to an empty string.
    // the next numbers the user clicks will be saved to the emptied currentNum string;
        /*
            When the user clicks another operator,
                we save initialise secondNum to the currentNum string;
                we return answer for the firstNum and secondNum values;
                after we return the answer, we empty the currentNum string, and the secondNum value;
                we initialise the firstNum to the answer.
                the process of recieving input as a string until the operator is pressed is started over.
             */
        /*
            The user may also click on the equal sign after entering the firstNum and secondNum values.
                when this happens, we return answer for the firstNum and secondNum;
                we save the answer, firstNum and secondNum values to an object, and push it to an array, that will save all calculations data.
                after this, we initialise firstNum, and secondNum values to zero, so as the answer, if it is a global variable.
        */
        

