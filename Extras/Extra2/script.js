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

let firstC = getRandomCard()
let secondC = getRandomCard()
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

function getRandomCard() {
    return 5
}

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
cardsEl.textContent = "Cards: " 

for( let x = 0; x < cards.length; x++) {
    cardsEl.textContent += cards[x] + " | "
}

sumEl.textContent = "Sum: " + summ
messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card from the deck")
    let newCard = getRandomCard()
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

// Basics 

for ( let count = 1; count < 11; count += 1) {
    console.log("hey fool im at " + count)
}

for( let nCount = 10; nCount < 200; nCount += 10) {
    console.log("Im so cool look at me Im at " + nCount)
}

let cardss = [7, 3, 9]

// Create a for loop that logs out all the cards in the array
// Use cards.length to specify how long the loop should run

for ( let x = 0; x < cardss.length; x++) {
    console.log(cardss[x])
}

let sentence = ["Hello ", "my ", "name ", "is ", "SpongeBob"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for ( let x = 0; x < sentence.length; x++) {
    greetingEl.textContent += sentence[x] 
}

// If the words didnt have a space in sentence just add the " "

// let sentence = ["Hello", "my", "name", "is", "SpongeBob"] 
// let greetingEl = document.getElementById("greeting-el")

// for ( let x = 0; x < sentence.length; x++) {
//     greetingEl.textContent += sentence[x] + " "
// }


// More Practice 

let pWLKakarot = 190
let pWLVegeta = 191 

function whoTheStrongest() {
    if (pWLKakarot > pWLVegeta) {
        return pWLKakarot
    } else {
        return pWLVegeta
    }
}

let strongestMofo = whoTheStrongest()
console.log(strongestMofo)

function totalpower() {
    return pWLKakarot + pWLVegeta
}

let canWeDefeatM = totalpower()
console.log(canWeDefeatM)