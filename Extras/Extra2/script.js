// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11

// 2. Create a variable, sum, and set it to the sum of the two cards


let firstCard = 7
let secondCard = 5

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Would you like to draw a new card?")
} else if ( sum === 21 ) {
    console.log("Big money you won!!")
} else {
    console.log("Sorry you're a loser")
}

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 22

// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

if ( age < 21) {
    console.log("Cant get in this club homeboy/homeigirl")
} else {
    console.log("Time to get turnt")
}

// Check if the person is elegible for a birthday card from the King! (100)

let atge = 100

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (atge < 100) {
    console.log("Not elegible")
} else if ( atge === 100 ) {
    console.log("Here is your birthday card from the King!")
} else {
    console.log("Not elegible, you have already gotten one")
}

let firstC = 10
let secondC = 11
let cards = [firstC, secondC]
let summ = firstC + secondC
let hasBlackJack = false

// Create a variable called isAlive and assign it to T
let isAlive = true

// Declare a variable called message and assign its value to an empty string
let message = ""

// Cash Out!
// console.log(hasBlackJack)

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

// Can use querySelector as an alternative as well

// let sumEl = document.querySelector("#sum-el")

// 2. Create a startGame() function. Move the conditional

function startGame() {
    renderGame()
}

function renderGame() {
    // Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> ""Big money you won!!" 🥳"
// else -> "You're out of the game! 😭"

// Flip its value to false in the appropriate code block 
// Reassign the message variable to the string we are logging out 
if (summ <= 20) {
    message = "Would you like to draw a new card?"
} else if ( summ === 21 ) {
    message = "Big money you won!!"
    hasBlackJack = true
} else {
    message = "Sorry you're a loser"
    isAlive = false
}
cardsEl.textContent = "Cards: " + cards[0] + " - " + cards[1] 
sumEl.textContent = "Sum: " + summ
messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck")
    let newCard = 2
    summ += newCard
    cards.push(newCard)
    console.log(cards)
    renderGame()
}

let extra = [8, 202]

extra.push(9)

console.log(extra)

// Push the newMessage to the messages array, and then log out the array

let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)

console.log(messages)

messages.pop()

console.log(messages)