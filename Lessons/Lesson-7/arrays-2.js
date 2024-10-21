// Array Built-In Methods

//1)Push -> it adds(appends) an element to the end of the array
 var score = [2,3,4,6,8,9,10,49,77]
 score.push(10);//This adds 10 to the end => [2,3,4,10]
 score.push(20); //[2,3,4,10,20]
console.log(score);


 // 2)Pop -> Removes the last item in an array
 console.log(score.pop())//Removes 10 from the array =>[2,3,4,10]

 //3)Shift -> It removes the first item and returns the removed item
 console.log('Before shift is called, score is', score);
var firstItem = score.shift();
console.log('Removed item is', firstItem);
console.log('After shift is called,score is', score);


//4)Unshift ->Inserts an element at the top of the array
console.log('Before shift is called, score is', score);
var insertedItem = score.unshift(100);
console.log('Inserted item is', insertedItem);
console.log('After unshift is called,score is', score);


//5)Splice =>It clips the portion of an array which contains elements that
//exists within the start/end index specified and returns the elements in a new array

console.log('Score before splice is', score)

var firstTwoElements = score.splice(-4,3);

console.log('Spliced elements are', firstTwoElements);

console.log('Score after splice is', score);

//6)Reverse =>This reverses the element in an array
console.log('Score before reverse is', score);
var reversedArray = score.reverse();
console.log('Score after reverse is', score);

//7)Includes => This checks if an item exists in an array
//It returns true if item exists or falls otherwise

var isItemInArray = score.includes(100);
console.log('The result of includes is', isItemInArray)

//8)IndexOf => It returns the index of an array if found else it returns -1

var indexOf100 = score.indexOf(100);
console.log('100 is located at index', indexOf100)