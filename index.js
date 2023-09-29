


let countEl = document.getElementById('count-el'),
    welcomeEl = document.getElementById('welcome-el'),
    saveEl = document.getElementById('save-el'),
    count = 0,
    greeting = 'Hi there, ',
    helloName = 'Ian'

welcomeEl.innerText = greeting + helloName
welcomeEl.innerText += '❤️'

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countDash = count + ' - '
    saveEl.textContent += countDash // appending countDash to existing text in saveEl (e.g. saveEl = saveEl + countDash)
    countEl.textContent = 0
    count = 0
}

// STRING ALWAYS WINS
console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"


