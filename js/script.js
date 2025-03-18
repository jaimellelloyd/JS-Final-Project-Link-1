// Alert Buton
const alertButton = document.getElementById("alertButton")

alertButton.addEventListener("click", function () {
  alert("Hello! This is an alert message")
})

// Show and Hide Button, Toggle Button
const menu = document.getElementById("menu")
const menuButton = document.getElementById("menuButton")

menuButton.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block"
  } else {
    menu.style.display = "none"
  }
})

// else if statement
let score = 90

if (score >= 90) {
  console.log(`Grade: A`)
} else if (score >= 80) {
  console.log(`Grade: B`)
} else if (score >= 70) {
  console.log(`Grade: C`)
} else {
  console.log(`Grade: D`)
}

// DOM Manipulation, Adding a paragraph
const addParagraphButton = document.getElementById("addParagraphButton")
const paragraphContainer = document.getElementById("paragraphContainer")

addParagraphButton.addEventListener("click", function () {
  const newParagraph = document.createElement("p")
  newParagraph.textContent = "Congratulations on leaning JavaScript!"
  paragraphContainer.appendChild(newParagraph)
})

// Increment & Decrement Counter Button
const counterDisplay = document.getElementById("counter")
const increment = document.getElementById("incrementButton")
const decrement = document.getElementById("decrementButton")

let count = 0

increment.addEventListener("click", function () {
  count += 1
  counterDisplay.textContent = count
})
decrement.addEventListener("click", function () {
  count -= 1
  counterDisplay.textContent = count
})

// Form Validation Using Regex for USERNAME
const usernameInput = document.getElementById("username")
const greetButton = document.getElementById("greetButton")
const greetMessage = document.getElementById("greetingMessage")

function isValidName(name) {
  const namePattern = /^[a-zA-Z\s]+$/
  return namePattern.test(name)
}

greetButton.addEventListener("click", function () {
  const username = usernameInput.value.trim()

  if (username === "") {
    greetingMessage.textContent = "Please enter your name"
  } else if (!isValidName(username)) {
    greetingMessage.textContent = "Invalid input. Please use only letters."
  } else {
    greetingMessage.textContent = `Hello, ${username}!`
  }
})

// Reset Button
const resetButton = document.getElementById("resetButton")

resetButton.addEventListener("click", function () {
  location.reload()
})

// let age = 25
// let firstName = `Jane`
// let lastName = `Doe`
// let fullName = `Hello, I am ${firstName} ${lastName}, and I am ${age} years old`
// console.log(fullName)

// function pangalan() {
//   console.log("Hi, Lloyd!")
// }
// pangalan()

// dot notation - separation or indication
// method - getElementByID
// block scope - starts and ends with the curly braces

// // let variable

// // Declare a variable using let
// let message = "Hello Lloyd!"
// console.log(message)

// // Update variable with a new value
// message = "Hello, Ansherina!"
// console.log(message)

// // Step 1: Declare a variable and assign an initial value
// let number = 10
// console.log("Initial Value:", number)

// // Step 2: Update a variable with a new value
// number = 20
// console.log("Updated value:", number)

// // Step 3: Perform an operation on the variable and assign the result
// number = number + 5
// console.log("After addition:", number)
