// SYNTAX       
// Square Brackets

var users = ["Kambang", "Laure","Bless"," Ruth"];
var kambang = users[0]; //Accessing an array item by its index
var Laure = users[1];
var Bless = users[2];
var Ruth = users[3];
var lastPerson = users[users.length - 1];

console.log('Kambang, Laure, LastPerson', lastPerson)

//Using the Array constructors
var scores = Array(5);
scores[0] = 10; // set a value/item/element to an array index
scores[1] = 23;
scores[2] = 50; 
scores[3] = 30;
scores[4] = 45; // scores[scores.length - 1] = 45
console.log('Array constructor example' , scores);


//Array of courses 
var courses = ['Paddle bike', 'Oil chain', 'Master brakes', 'Swag'];
//var userSelectedCourse = prompt('Please tell us what you want to learn');

//To easily access or manipulate elements of an array, we use loops 
// => Arrays and loops are 5&6

//Lets use the For...loop to access the elements of our courses array
for( index = 0; index < courses.length; index++){
    var course = courses[index]; // courses[0]
    console.log('The current course is', course);
}

//Exercise,
//Using the courses array and the example above,
//Implement a scenario where the user inputs the course and you are able to
// tell them if the course is currently avaible or not.


//SOLUTION
var userInput = prompt('Enter a course');
// Define function => PURE FUNCTION
function checkIfCourseExists(input,array){
    for(var i = 0; i < array.length; i++){
        if ( input == array[i]){
            alert('Course available');
            return;
        }
    }
    alert('Course NOT available');
    return;
}
// Execute/Invoke the function
checkIfCourseExists(userInput,courses);