const inputEl = document.querySelector(".input-El");
const answerEl = document.querySelector(".answer-El");
const btnsSection = document.querySelector(".all--buttons");
let operatorIsClicked = false;
//let equalBtnClicked = false;
let showAnswer = false;
let currentNum = "";
let firstNum;
let secondNum;
let operator;
let className;
let answer

renderBtnElements();

function sideEffectsBtn(btnText) {
    if ((btnText === "=") || (btnText === "Del") || (btnText === "AC")) {
        return true;
    }
    return false;
}
function handleClick(e) {
    const { className, textContent } = e.target;
    if (!sideEffectsBtn(textContent)) {
        let value = parseInt(textContent)
        let newOperator;

        if (value) {
            currentNum = (firstNum && operator)
                ? value : currentNum + value

        } else {
            newOperator = textContent;
            operator = (!sideEffectsBtn(textContent)) ? newOperator : operator;
        }

        if (operator && secondNum) {
            firstNum = answer
            secondNum = value;
        } else {
            operator ?
                secondNum = value
                :
                firstNum = parseInt(currentNum);
        }
        answer = secondNum && getAnswer(operator, firstNum, secondNum);

        inputEl.value += !sideEffectsBtn(textContent) && textContent || "";

    } else {
        switch (textContent) {
            case "=":
                displayAnswer(true);
                break;
            case "Del":
                deleteAll();
                break;
            case "AC":
                deleteAll();
                break;
            default:
                break;
        }
    }
}

function displayAnswer(isClicked) {
    console.log("clicked")
    answerEl.textContent = isClicked && answer || "";
}

function renderBtnElements(_numberBtns, _operatorBtns) {
    // #new approach!! #new way!! #faster!
    const characters = createArray("789DC654÷x321+-0.%=");
    btnsSection.innerHTML = characters.reduce((acc, char) => {
        return acc + `<button type="button" >${char}</button>`
    }, "");

    function targetBtn(char) {
        return btnsSection.children[characters.indexOf(char)]
    }

    targetBtn("=").style = "grid-column: -3/-1";
    targetBtn("C").textContent = "AC";
    targetBtn("D").textContent = "Del";

    let btnsArray = [...btnsSection.children]
    btnsArray.forEach((btn) => {
        return btn.addEventListener("click", (e) => handleClick(e))
    });
}

function createArray(_string) {
    let newArray = [];
    for (let char of _string) {
        newArray.push(char);
    }
    return newArray;
}

function getAnswer(_operator, firstNum, secondNum = 0) {
    switch (_operator) {
        case "%":
            return firstNum % secondNum
            break;
        case "÷":
            return firstNum / secondNum
            break;
        case "x":
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
