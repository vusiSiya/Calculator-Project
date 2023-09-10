const inputEl = document.querySelector(".input-El");
const answerEl = document.querySelector(".answer-El");
const btnsSection = document.querySelector(".all--buttons");
let operatorIsClicked = false;
let showAnswer = false;
let currentNum = "";
let firstNum;
let secondNum;
let operator; // let the operator be local, not global!
let className;
let answer = 0;

renderBtnElements();

function handleClick(e) {

    const {textContent} = e.target;
    
    if (!sideEffectsBtn(textContent) ) {
        let value = parseInt(textContent) 
        let newOperator;

        if (value || textContent === ".") {
            currentNum = (firstNum && operator) ? value : currentNum + value

        } else {
            newOperator = textContent;
            operator = (!sideEffectsBtn(textContent)) ? newOperator : operator;
        }

        if (operator && secondNum) {
            firstNum = answer;
            secondNum = value;
        } else {
            operator ? secondNum = value : firstNum = parseFloat(currentNum);
        }
        displayAnswer(false);

    } else {
        switch (textContent) {
            case "=":
                displayAnswer(true)
                break;
            case "Del":
                deleteLast();
                break;
            case "AC":
                deleteAll();
                break;
            case ".":
                convertToDecimal(textContent);
            break;
            default:
                break;
            }
    }

        inputEl.value += !sideEffectsBtn(textContent) && textContent || "";
        answer = secondNum && getAnswer(operator, firstNum, secondNum);
}

function renderBtnElements() {
    const buttons = createArray("789CD654÷×321+-0.%=");

    btnsSection.innerHTML = buttons.reduce((acc,char)=>{
        return acc + `<button type="button" >${char}</button>`
    }
    , "");

    function targetBtn(char) {
        return btnsSection.children[buttons.indexOf(char)]
    }

    targetBtn("=").style = "grid-column: -3/-1";
    targetBtn("C").textContent = "AC";
    targetBtn("D").textContent = "Del";
    let btnsArray = [...btnsSection.children];
    btnsArray.forEach((btn)=>{
        return btn.addEventListener("click", (e)=>handleClick(e))
    }
    );
}

function createArray(_string) {
    let newArray = [];
    for (let char of _string) {
        newArray.push(char)
    }
    return newArray;
}

function sideEffectsBtn(btnText) {
    if ((btnText === "=") || (btnText === "Del") || (btnText === "AC")) {
        return true;
    }
    return false;
}

function convertToDecimal(textContent) {
    parseFloat(currentNum += textContent)
}

function displayAnswer(isClicked) {
    const conditionalStyle = ( isClicked ?
        "color: black; font-weight: bold;" 
        : 
        "color: grey;font-weight: normal; font-size: 1.3rem"
    );
}
    let isZero = (answer === 0)
    answerEl.textContent = isZero ? 0 : answer || "";

    answerEl.style = conditionalStyle;
function deleteLast() {
    
}
function deleteAll() {
    firstNum *=0;
    secondNum *=0;
    currentNum =""
    operator =""
    answer = 0;
    inputEl.value =""
    answerEl.textContent = 0;
}
function getAnswer(_operator, firstNum=0, secondNum=0) {
    let answer
    switch (_operator) {
    case "%":
        answer = firstNum % secondNum
        break;
    case "÷":
        answer = firstNum / secondNum
        break;
    case "×":
        answer = firstNum * secondNum
        break;
    case "-":
        answer = firstNum - secondNum
        break;
    case "+":
        answer = firstNum + secondNum
        break;
    default:
        break;
    }

    return parseFloat(answer)
}

