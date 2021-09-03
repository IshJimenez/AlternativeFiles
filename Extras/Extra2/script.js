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

let firstC= 10
let secondC= 7
let summ = firstC + secondC

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> ""Big money you won!!" 🥳"
// else -> "You're out of the game! 😭"

if (summ <= 20) {
    console.log("Would you like to draw a new card?")
} else if ( sum === 21 ) {
    console.log("Sorry you're a loser")
} else {
    console.log("Sorry you're a loser")
}