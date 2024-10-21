// Arrays and Objects - Exercises


//1)Transform the following array of numbers to an object containing the squares of the array elements
var scores = [3, 5, 9, 17, 5, 4, 34, 11, 13];

//Sample output
/**
 * squaredObj = {
 * 3:9,
 * 5:25,
 * 9:81
 * }
 */

var squaredObj = {}
for (var index = 0; index < scores.length; index++) {
    squaredObj[scores[index]] = (scores[index] * scores[index])
}
console.log('Squared Object is', squaredObj)

/**
 * [{3:9},{4:16},{5:25}]
 */
var newArrayOfObjects = [];
var newArrayOfArrays = [];
for(var index = 0; index < scores.length; index++){
var newObj = {};
var innerArray = [];

//EXERCISE 1
newObj[scores[index]] = scores[index] * scores[index];
newArrayOfObjects.push(newObj);

//EXERCISE 2
innerArray.push(scores[index]);
innerArray.push(scores[index] * scores[index]); 

//innerArray[0] = scores[index];
//innerArray[1] = scores[index] * scores[index];
newArrayOfArrays.push(innerArray)
}

/**
 * [[3:9],[4:16],[5:25]] => We have seen this somewhere
*/
//var array = Object.entries(squaredObj);
//console.log(array);
