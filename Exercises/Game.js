//Todays Exercise

/**
 * We randomly pick a number
 * The user guesses
 * If success => Their points increase by (point_increase) value
 * If failed => Increase failure count
 * 
 * =>If user points go  beyond 50, user=KING
 * => If user failure count exceeds 5 (print game over) user=KONG
 */

//SOLUTION TO PROBLEM
// Define pointIncrease
var pointIncrease = 2;
//Define failureCount
var failureCount = 0;
//Define userPoints
var userPoints = 0 

//Generate random number (Use the built-in Math Library)
while (failureCount < 5 && userPoints < 10) {
var winningNumber = Math.ceil(Math.random()*500);

// Peep the answer
console.log('Winning Number', winningNumber);

// Get user input using the built-in prompt function
var userInput = prompt('Guess the winning number');

//Prompt returns a string, so lets cast the returned value to number
// Use the parseInt() function to convert a stringed number to a number
userInput = parseInt(userInput);

//Check
if(userInput == winningNumber) {
    //User guessed the number
    userPoints += pointIncrease ; alert ('Correct that is the winning number')
}
else{
    failureCount++; alert ('wrong that is not the winning number')
}
console.log('winning number is', winningNumber)
console.log('failure count is ', failureCount)
console.log('user points is ', userPoints)
if(userPoints >= 50){
     alert('Congrats! You are a KING')
}

if(failureCount == 5){
    alert('Eweeeehhh eee! Are you a KONG??')
}
}