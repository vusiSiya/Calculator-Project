const inputEl = document.querySelector(".input-El");
const answerEl = document.querySelector(".answer-El");
const numberBtns = document.querySelector(".number-btns");
const operatorBtns = document.querySelector(".operator-btns");
const btnsSection = document.querySelector(".all--buttons");
let operatorIsClicked = false;
let equalBtnPressed = false;
let showAnswer = false;
let currentNum = "";
let firstNum;
let secondNum;
let operator;
let className;

renderBtnElements(numberBtns, operatorBtns);

document.addEventListener("click", (e)=>{
    const {className, textContent} = e.target;
    let value = textContent;
    if (className === "num") {
        currentNum = (firstNum && operatorIsClicked) ? value : currentNum + value;
    } else if (className === "sign") {
        operatorIsClicked = true;
        operator = value;
        /*equalBtnPressed = operator === "=" ? !equalBtnPressed : equalBtnPressed;
		return inputEl.value = getAnswer();*/
    }
    operatorIsClicked && (currentNum == "" || value != operator) ? secondNum = currentNum * 1 : firstNum = currentNum * 1;
    inputEl.value = (secondNum) ? getAnswer(operator) : currentNum;
}
);

function renderBtnElements(_numberBtns, _operatorBtns) {
	// #new approach!! #new way!! #faster!
    const characters = createArray("789CD654/*321+-0.%=");
    btnsSection.innerHTML = characters.reduce((acc,char)=>{
        return acc + `<button type="text" >${char}</button>`
    }, "");
	btnsSection.children[characters.indexOf("=")].style = "grid-column: -3/-1";

    /*
	const numbers = createArray("789654321");
	const operators = createArray("/*+-=");
	const numbersFragment = appendChildren(elementsArray(numbers, "num"));
	const operatorsFragment = appendChildren(elementsArray(operators, "sign"));
	_numberBtns.appendChild(numbersFragment);
	_operatorBtns.appendChild(operatorsFragment);
	*/
}
function createArray(_string) {
    let newArray = [];
    for (let char of _string) {
        newArray.push(char);
    }
    return newArray;
}
function elementsArray(_array, _className) {
    className = _className;
    const elements = _array.map((arrayEl,i)=>{
        let newElement = createEl("button", _className, arrayEl);
        return newElement;
    }
    )
    return elements;
}

function createEl(_el, _className, _text) {
    let newElement = document.createElement(_el);
    newElement.innerText = _text ? _text : "";
    newElement.className = _className;
    return newElement
}

function appendChildren(_elementsArray) {
    let fragment = document.createDocumentFragment();
    _elementsArray.forEach(el=>fragment.appendChild(el));
    return fragment;
}

function getAnswer(_operator) {
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
    return answer * 1;
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
