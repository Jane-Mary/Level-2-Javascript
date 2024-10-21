//ES6 features
for (var i = 0; i < 5;i++){
}
console.log(i);

 for (let i = 0; i < 5;i++){
}
console.log(i);

 //for...of loop
 //It is used only for arrays
// let letters = ['a', 'b', 'c', 'd', 'e', 'f']
// for(let letter of letters){
//     console.log(letter);
// }

// let greet = 'Hello World'
// for(let characters of greet){
//     console.log(characters);
// }

//for...in
//it is used to loop an object
// const person ={name:'Peter', class:4, age:16}
// for(let p in person){
//     console.log(p);
// }
//Interpolation in JS is getting a value of a variable and outputting it.

//Default values for function parameters
function sayHello(name='World'){
    return `Hello ${name}`;
}
console.log(sayHello());
console.log(sayHello('John'));
 
//Every function is an object

 