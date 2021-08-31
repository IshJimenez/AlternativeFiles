// document.getElementById("count-el").innerText = 87

// Intialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked
// Subtract when the sub button is clicked
// Change the count-el in the HTML to reflect the new count 

let countE = document.getElementById("count-el")

let count = 0

function addd() {
    // count = count + 1
    count += 1
    countE.innerText = count
    
}

function subb() {
    // count = count - 1
    count -= 1
    countE.innerText = count
}

// -) Grab the saveEl paragraph and store it in a variable called saveEll
let saveEll = document.getElementById("saveEl")

// Create a function, save(), which logs out the count when its called

function save() {

    // -) Create a variable that contains both the count and the dash separator, "12 -"

    // let countz = " " + count + " - "
    // Will work with innerText since it will read the space as a character and will give it a space on the page

    let countz =  count + " - "

    // -) Render the variable in the saveEll using innerText

    saveEll.innerHTML += countz

    // -) Make sure to not delet the exisiting content of the paragraph 

    countE.textContent = 0
    count = 0

    console.log(count)
    }

// save()

let countZ = document.getElementById("count2")

let clout = 0;

function add2() {
    clout = clout + 2
    countZ.innerText = clout 
}

function sub2() {
    clout = clout - 2
    countZ.innerText = clout
}

function savee(){
    console.log(clout)
}

savee()

// Create a varaible, powerLvl, and set it equal to a num
// Log the whoAge to the console

let powerLvl = 10000
console.log(powerLvl)

// Extra problem

let firstCrew = 10
let secondCrew = 5

let total = firstCrew + secondCrew
console.log(total)

// Create 2 variabes, anyNum and dogYears
// Multiply the 2 and store the result as dogAge
// Log dogAge to the console

let anyNum = 1000
let dogYears = 7

let dogAge = anyNum * dogYears
console.log(dogAge)

// Create a variable, bonus. Initalize it as 50. Increase it to 100.
// Decrease it down to 25, and then increase to 60

let bonus = 50

bonus = bonus + 50

bonus = bonus - 75

bonus = bonus + 35

console.log(bonus)

function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown()

// Create a function that logs out the number 88 to the console
// Call/ivoke the function

function heyNum() {
    console.log(88)
}

heyNum()

let lap1 = 48
let lap2 = 42
let lap3 = 41

function allOfThem() {
    let totalz = lap1 + lap2 + lap3
    console.log(totalz)
}

allOfThem()

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with 1
// Run it 4 times

function incrementLaps(){
    lapsCompleted = lapsCompleted + 1
}

incrementLaps()
incrementLaps()
incrementLaps()
incrementLaps()

console.log(lapsCompleted)

let user = "Yugi"

// Create a variable, message, that stores the string "does heart of the cards make you a cheater"

let message = "does heart of the cards make you a cheater"

console.log(message)

console.log(user + ", " + message + "?")

// Create a variable, theTruth, that contains the message we have logged.

let theTruth = user + ", " + message + "?"

console.log(theTruth)

// Create 2 variables, name and card. The name variable will be Yugi and the card will be Dark Magician.
// Create a 3rd variable, that contatenates the 2 strings and log it to the console.

let name = "Yugi"

let card = "Dark Magician"

let shockerNoWay = name + " yells I summon the " + card + "!"

console.log(shockerNoWay)

// Grab the welcomeE paragraphand store it in a variable called welcomeEL
// Create 2 variables (name1 & quote) that contains a name and a quote
// Create a 3rd variable to store those variables 
// Render the welcome message using weclomeE.innerText using the 3rd variable

let welcomeEL = document.getElementById("welcomeE")

let name1 = "Pegasus."
let quote = "I play the magic card ToonWorld"
let welc = quote + " yells " + name1

welcomeEL.innerText = welc

// More practice

let welcomeXL = document.getElementById("welcomeZ")

let name2 = "Joey."
let quote2 = "I play the flaming swordsman"
let welcZ = quote2 + " says " + name2

welcomeXL.innerText = welcZ

// You guessed it more practice

let welcomeKa = document.getElementById("welcomeK")

let name3 = "Kaiba screams "
let quote3 = "impossible no one has been able to assemble all 5 pieces of Exodia."
let welcK = name3 + quote3

welcomeKa.innerText = welcK

welcomeKa.innerText += " 😢"

// If instead of storing variables into a variable another way would be 

// welcomeKa.innerText = name3 + quote3

// If you wanted to update with emoji without changing code above it

// welcomeKa.innerText = welcomeKa.innerText + " 😢"

// But to make it fancier

// welcomeKa.innerText += " 😢"

// Give same response as above

// Create 2 variables, firstDude and secondDude

// Concatenate the 2 variables into a third variable called pepInShow

// Log pepInShow to the console

let firstDude = "Gon"

let secondDude = "Kurapika"

let pepInShow = firstDude + " and " + secondDude + " are in hxh"

console.log(pepInShow)

// Create a function that logs out "Hey there, Yugi!" when called

let namew = "Yugi"

let greeting = "Hi there,"

function ooh() {
    let greetingz = greeting + " " + namew + " ! "
    console.log(greetingz)
}

ooh()
