// Function Definition. There are 02 ways of defining functions;

//1)Function Literal Notation: In this method we use the function keyword.
//Parameters of a function are optional.
//Parameters are things we pass to the function for it to execute.
//
function addTwoNumbers(a,b){
    //Function block
    var answer = a + b;
    console.log(answer);
}
addTwoNumbers(4, 10);
function sayHi(){
    //Write the function logic
    alert('Hi...there');
}

//Function Invocation/Calling: This is the act of making a function get into action
// To invoke a function, we put() infront of a function name or 
// Function variable without{} and pass in all parameters expected
//Function Execution: This is the time, duration, process in executing a code

/**2)Function Expression
 * Create a variable notation/name
 * Pass an anonymous function*/
 var addNumber = function(a,b,c,d){
    var answer = a+ b+ c+ d;
    console.log('answer is' , answer);
 }

 //Function return type
 //Return keyword is used to stop the execution of a function and return the specified value
 //In JS, if no value is given to the return keyword, it returns UNDEFINED
 //If no return keyword is specified in a function, it returns UNDEFINED/VOID
 function multiplyByTwo(value){
    let result = value  * 2
    return result
 }
var a = multiplyByTwo(5)
//multiplyByTwo(1387428)
var multipliedResult = multiplyByTwo(138);
console.log('Multiplied Result is' , multipliedResult)
 // console.log('Multiplied Result is', multipliedResult)
