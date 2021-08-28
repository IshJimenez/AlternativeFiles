// document.getElementById("count-el").innerText = 87

// Intialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked
// Subtract when the sub button is clicked
// Change the count-el in the HTML to reflect the new count 

let countE = document.getElementById("count-el")

let count = 0;

function addd() {
    count = count + 1
    countE.innerText = count
    
}

function subb() {
    count = count - 1
    countE.innerText = count
}

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

// Create a function, save(), which logs out the count when its called

function save() {
    console.log(count)
}

save()
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