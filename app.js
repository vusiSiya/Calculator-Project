const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')
const seven = document.getElementById('seven')
const eight = document.getElementById('eight')
const nine = document.getElementById('nine')
const inputEl = document.getElementById('input-El')
const answerEl = document.getElementById('answer-El')
const cancelButn = document.getElementById("cancel-Butn")
const cancelAllButn = document.getElementById("cancel-All")
const XSquared = document.getElementById("exp-2")
const RootX = document.getElementById("square-Root")
const Ans = document.getElementById("Ans")
const Equal = document.getElementById("equal")
const Plus  = document.getElementById("plus")
const Minus  = document.getElementById("minus")
const Multiply  = document.getElementById("multiply")
const Divide = document.getElementById("divide")
const Comma = document.getElementById("decimals")


let num =0;
let strng = ""
let sOperator = ""
let answer;
let isAlive = true;

function zeroButn() {
    num = 0;
    strng += num
    inputEl.textContent += num;
    console.log(strng)
}


function oneButn() {
    num = 1;
    strng += num
	inputEl.textContent +=  num;
    console.log(strng)
}

function twoButn() {
    num = 2
    strng += num
    inputEl.textContent += num;
    console.log(strng)
}

function threeButn() {
    num = 3
    strng += num
    inputEl.textContent += num;
    console.log(strng)
}
function fourButn() {
    num = 4
    strng += num;
    inputEl.textContent += num;
    console.log(strng)
}
function fiveButn() {
    num = 5
    strng += num
    inputEl.textContent += num;
    console.log(strng)
}
function sixButn() {
    num = 6
    strng += num
    inputEl.textContent += num;
    console.log(strng)
}
function sevenButn() {
    num = 7
    strng += num
    inputEl.textContent += num;
    console.log(strng)
}
function eightButn() {
    num = 8
    strng += num
    inputEl.textContent += num;
    console.log(strng)
}

function nineButn() {
    num = 9
    strng += num
    inputEl.textContent += num;
    console.log(strng);
}

let value1 = Value(strng);
strng = ""; //clearing the value of the numbers string so that we can set new values
let value2 = Value(strng);
strng = ""; //clearing the value of the numbers string so that we can set new values

function Value(_strng) {
    let number = "";

    //What if I added and event Listener foreach numbers-button, that will return the value of the clicked button
    for (let i = 0; i < _strng.length; i++) {
        number = _strng[i];
    }

    return number.toInt32;
}

function Answer() {

    if (sOperator) {

        switch (sOperator) {
            case "+":
                answer = value1 + value2;
                break;
            case "-":
                answer = value1 - value2;
                break;
            case "X":
                answer = value1 * value2;
                break;
            case "/":
                answer = value1 / value2;
                break;
            default:
                break;
        }
        AnswerEl.textContent = answer
    }   
}

function Plus() {
    sOperator = "+";
    inputEl.textContent += sOperator;

    Answer()
}

function  squareRootOf_X(){
   
    inputEl.textContent += `√`;
    let val = 0;
    strng += num
    val = Value(strng)
    if (val) {
        inputEl.textContent += `${val}`;

        answer = Math.sqrt(val)
        console.log(answer)
    }
    Equal.addEventListener("click", function () {
        answerEl.textContent = answer;
    })

}

function xSquared() {

    inputEl.textContent += `x^2`;
    let val = 0;
    strng += num
    val = Value(strng)
    strng = ""
    if (val) {
        inputEl.textContent += `${val}`;
        answer = Math.exp(val, 2)
        console.log(answer)
    }
    Equal.addEventListener("click", function () {
        answerEl.textContent = answer;
    })
}
     