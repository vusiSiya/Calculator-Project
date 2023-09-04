const inputEl = document.querySelector(".input-El");
const answerEl = document.querySelector(".answer-El");
const btnsSection = document.querySelector(".all--buttons");
let operatorIsClicked = false;
let equalBtnPressed = false;
let showAnswer = false;
let currentNum = "";
let firstNum;
let secondNum;
let operator;
let className;
let answer

renderBtnElements();

function handleClick(e){
	console.log("clicked")
    const {className, textContent} = e.target;
    let value = parseInt(textContent)
    if (value) {
        currentNum = (firstNum && operator) 
			? value : currentNum + value
		
    } else{
        operator = textContent;
        /*equalBtnPressed = operator === "=" ? !equalBtnPressed : equalBtnPressed;
		return inputEl.value = getAnswer();*/
    }
    //operator && (currentNum == "") ? secondNum = value : firstNum = value 
	if (operator && secondNum) {
		firstNum = answer
	    secondNum = value;
	} else{
		operator ? secondNum = value : firstNum = parseInt(currentNum) 
	}
   answer = secondNum && getAnswer(operator,firstNum, secondNum);
	
	inputEl.textContent += textContent + " ";
	answerEl.textContent = answer || "";
}

function renderBtnElements(_numberBtns, _operatorBtns) {
	// #new approach!! #new way!! #faster!
    const characters = createArray("789DC654/*321+-0.%=");
    btnsSection.innerHTML = characters.reduce((acc,char)=>{
        return acc + `<button type="text" >${char}</button>`
    }, "");

	function targetBtn(char) {
		return btnsSection.children[characters.indexOf(char)]
	}
	
	targetBtn("=").style = "grid-column: -3/-1";
	targetBtn("C").textContent = "AC";
	targetBtn("D").textContent  = "Del";
	
	let btnsArray = [...btnsSection.children].filter(btn => (btn.textContent != "AC") && (btn.textContent != "Del")) ;
	btnsArray.forEach( (btn)=> {
		return btn.addEventListener("click", (e) => handleClick(e))
   })
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

function getAnswer(_operator, firstNum, secondNum=0) {
    switch (_operator) {
	case "%":
     return firstNum % secondNum
        break;
    case "/":
     return firstNum / secondNum
        break;
    case "*":
     return firstNum * secondNum
        break;
    case "-":
     return firstNum - secondNum
        break;
    case "+":
     return firstNum + secondNum
        break;
    default:
        break;
    }
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
