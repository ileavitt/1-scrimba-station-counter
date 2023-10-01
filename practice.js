//=========================================================

let firstName = 'Ian'
let lastName = 'Leavitt'
let fullName = `${firstName} ${lastName}`
console.log(fullName)

//=========================================================

let fn = 'Linda'
let welcome = 'hi there'

function hello() {
    console.log(`${fn} ${welcome}!`)
}

hello()

//=========================================================

let myPoints = 3

function addThree() {
    console.log(myPoints += 3)
}

addThree()

function subOne() {
    console.log(myPoints -= 1)
}

subOne()

//=========================================================

// STRING ALWAYS WINS
console.log("2" + 2) // "22"
console.log(11 + 7) // 18
console.log(6 + "5") // "65"
console.log("My points: " + 5 + 9) // "My points 59"
console.log(2 + 2) // 4
console.log("11" + "14") // "1114"

//=========================================================

{/* <button onclick="error()">Purchase</button>
<p id="error"></p> */}

let errorEl = document.getElementById('error')

function error() {
    errorEl.textContent = "Something went wrong, please try again"
}

//=========================================================

{/* <span id="num1-el"></span>
<span id="num2-el"></p>
<button onclick="add()">Add</button>
<button onclick="subtract()">Subtract</button>
<button onclick="multiply()">Multiply</button>
<button onclick="divide()">Divide</button>
<p id="sum-el"></p> */}

let num1 = 8
let num2 = 2
let sumEl = document.getElementById('sum-el')
document.getElementById('num1-el').textContent = num1
document.getElementById('num2-el').textContent = num2


function add() {
    sumEl.textContent = num1 + num2
}

function subtract() {
    sumEl.textContent = num1 - num2
}

function multiply() {
    sumEl.textContent = num1 * num2
}

function divide() {
    sumEl.textContent = num1 / num2
}

//=========================================================