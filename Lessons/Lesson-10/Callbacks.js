//Callback function => A function passed around to another function
//as a parameter to perform some operations and return results to the caller

//EXAMPLE
//Let's implement a callback function that squares element in an array
//And returns thee squared array


//Imagine, we have marks to calculate their square within an exam function

// function exam(nameOfStudent, marks,cb) {
// return {
//     name:nameOfStudent,
//     marks:cb(marks) // This marks must be squared
// }
// }

// var student = 'Kambang';
// var marks = [2, 4, 6, 8, 10];
// var studentExamResults = exam(student, marks, function () {
//     var newArray = [];
//     for(var i = 0; i < elements.length; i++){
//         newArray.push(elements[i] * elements[i]);
//     }
//     return newArray;
// });
// console.log('Student Exam Result', studentExamResults);

//Example 2
//Let's implement that filters even numbers in an array and returns a new array of even numbers found


//Task one 
//Create a function to reverse an even array of numbers

function checkForEven(array){
    var evenArray = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            evenArray.push(array[i]);
        }
    }
}

function reverseEvenArray(array,cb){
    var reversedArray = [];

    var evenArray = cb(array);

    for(var i = evenArray.length - 1; i >= 0; i--){
        reversedArray.push(array[i])
    }
    return reversedArray;
}
var results = reverseEvenArray([3, 6, 7, 2, 4, 9, 8, 43, 56],checkForEven)
console.log('Result is', results) 