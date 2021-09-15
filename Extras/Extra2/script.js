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

let cards = []
let summ = 0
let hasBlackJack = false

// Create a variable called isAlive and assign it to T
let isAlive = false

// Declare a variable called message and assign its value to an empty string
let message = ""

// Cash Out!
// console.log(hasBlackJack)

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.getElementById("cards-el")

let  player = {
    name : "SpongeBob",
    chips : 200
}

let playerInfo = document.getElementById("playerM")
playerInfo.textContent = player.name + ": $ " + player.chips

function getRandomCard() {
    let randomN = Math.floor ( Math.random() * 13 ) + 1
    if (randomN >= 10 ) {
      return 10  
    } else if ( randomN === 1) {
        return 11
    } else {
    return randomN

}
}
// Can use querySelector as an alternative as well

// let sumEl = document.querySelector("#sum-el")

// 2. Create a startGame() function. Move the conditional

function startGame() {
    isAlive = true
    let firstC = getRandomCard()
    let secondC = getRandomCard()
    cards = [firstC, secondC]
    summ = firstC + secondC
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
    if ( isAlive === true && hasBlackJack === false) {
    console.log("Drawing a new card from the deck")
    let newCard = getRandomCard()
    summ += newCard
    cards.push(newCard)
    console.log(cards)
    renderGame()
}
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

let randomNumber = Math.random()

console.log(randomNumber)

let flooredNumber = Math.floor(4.45632)

console.log(flooredNumber)

let randomNumberr = Math.floor( Math.random() * 6 ) + 1

console.log(randomNumberr)

// Create a function, rollDice(), that returns a random number between 1 and 6

function rollDice() {
    let randomNum = Math.floor( Math.random() * 7 ) 
    return randomNum
}

let company = true
let bob = true

if (company === true && bob === true) {
    console.log("yay") 
}

let isGohanStrongEnoughfterCell = false
let isGohanStrongEnoughfterM = false

// Create an if statement that checks that both variables are false.
// If so, run the showFacts() function

    function showFacts() {
        console.log("He needs to keep training with his real dad Picollo....")
}


if (isGohanStrongEnoughfterCell === false && isGohanStrongEnoughfterM === false) {
    showFacts()
}

// Create two boolean variables, likesBleach and likesHXH
// Use an OR statement (||) to call recommendAnime() if either of those variables are true

function recommendAnime() {
    console.log("Hey, check out this show we think you will like!")
}


let likesHXH = true
let likesBleach = false

if (likesHXH === true || likesBleach === true) {
    recommendAnime()
}

// Create an object that represents an RPG character.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation


let cCreator = {
    namee: "Skeletor",
    class: "Necromancer",
    good: true,
    int: 125,
    str: 20,
    spells: ["raiseUndead", "shadowBolt", "bindingOfTheUndead"]
}

console.log(cCreator.spells)
console.log(cCreator.int)

// Create a person object that contains three keys: name, race, and class.
// Write a character that has those values

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is a orc and is a warrior"

// Call the logData() function to verify that it works

let person = {
    name: "Obelisk",
    race: "elf",
    class: "mage"
}

function logData() {
    console.log(person.name + " is a " + person.race + " and is a " + person.class)
}

logData()

let agee = 66

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if ( agee < 6 ) {
    console.log("hey you pay no money")
} else if ( agee < 18 ) {
    console.log (" child discount")
} else if ( agee < 27 ) {
    console.log (" student discount ")
} else if ( agee <  67 ) {
    console.log (" full price ")
} else {
    console.log (" senior citizen discount ")
}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/

for ( let x = 0; x < largeCountries.length; x++) {
    console.log(" - " + largeCountries[x])
}

let largeCountriess = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountriess array so that 
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()

largeCountriess.shift()
console.log(largeCountriess)
largeCountriess.unshift("China")
console.log(largeCountriess)
largeCountriess.pop()
console.log(largeCountriess)
largeCountriess.push("Pakistan")
console.log(largeCountriess)

let dayOfMonth = 13
let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

if (dayOfMonth === 13 && weekday === "Friday") {
    console.log("😱")
}

let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

let randoo = Math.floor(Math.random() * hands.length);

function rando() {
    return hands[randoo]
}

console.log( rando() )

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function fufu() {
    for (let x = 0; x < fruit.length; x++) {
        if( fruit[x] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if ( fruit[x] === "🍊" ) {
            orangeShelf.textContent += "🍊"
        }
    }
}

fufu()