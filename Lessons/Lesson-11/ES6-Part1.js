//Variable definition 
//Use let or const

// let username = 'Kambang';
// let scores = [3, 5, 1, 78, 9];
// //const age = 20;
// let person = { name: 'Prince', age: 4, gender: 'Male', userAddress: 'Douala' };

// //Use template literals if need be
// let address =`Bonaberi, Douala - Cameroon`;
// let paragraph = `
// <p>Hello world</p>
// <span>How is JavaScript going? </span>
// `;

// let insertedDataInAddress = `People live at ${address}`;
// let particularPerson = `
// <div> <span> An example of such person is ${person.name} and 
// he lives in ${person.location} precisely at ${address} </span> </div>
// `; 


// //Destructuring
// //Lets say we want to get all32 the props of the person object
// //as separate variables
// //let person = { name: 'Prince', age: 4, gender: 'Male', location: 'Douala' };

// // const name = person.name;
// // const age = person.age;
// // const gender = person.gender;
// // const location = person.location;

// let {name:studentName,age,gender,userAddress} = person;

// console.log('Name is', name);
// console.log('age ,location and gender are' ,age ,userAddress,gender);

// //Destructuring aarrays
// const users = ['Kambang', 'Sinclaire', function (){return true},true,false,'hello'];

// // const firstName = users[0];
// // const secondName = users[1];
// // const userCalledBack = users[2];

// //Apply destructuring syntax
// const [firstName,secondName,userCalledBack, isMarried] = users;

// Arrow Functions

//Simple arrow function
const multiplyByTwo = (value) => {
    return value * 2;
} 

//Let's shorten the function -If we are passing just one parameter to the function,
//We can omit the () brackets around the param name
const shortenedMultiplyByTwo = value => {
    return value * 2
}


//more concise version - If the function contains just a single line of code,
//We can omit the return statement and the curly brackets
const betterMultiplyByTwo = value => value * 2

//Default parameters
const multiplyByFactor = (value,factor=3) => value * factor;

let outcome = multiplyByFactor(16,4);
console.log('Outcome is', outcome)

//Single Parameter, single statement
var greet = name => alert ("Hi" + name +"!");
greet('Peter');

//Multiple arguments , single statement
var multiply = ( x,y) => x * y
alert(multiply(2,3));

//Single parameter,multiple statements
var test = age => {
    if(age > 18){
        alert("Adult")  
    }
    else{
        alert("Teenager")
    }
}
test(21);0

//Multiply parameter ,multiple statements
var divide = (x,y) => {
    if(y != 0){
        return x / y;
    }
}

//No parameter, single statement
var hello = () => alert ('Hello World!');
hello();

//Higher Order Functions
function greaterThan(n){
    return m => m > n  
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); 