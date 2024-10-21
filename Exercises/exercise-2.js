/**Assignment  
*1)Write a function which receives an array and returns a new array which consists of
odd numbers that are multiples of 3
* 2)Research on concat , sort , join, every, some

 * 3) Write a function to reverse the elements in an array without using the reverse method.

 * 4)Write a function that combines two arrays and returns a new array.Don't use the concat function.

 * 5)Write a function that returns the maximum and minimum items in an array.
 * Use loops and conditonal statements
 * 
 * 6) Write a function that compares two arrays with the same length and returns the largest item in the array.
 * 
 * 7)write a function that squares , all elements in an array and returns a new array 
 * that contains squared elements which are odd numbers
 */

//Solution
//1)Odd number
var numbers = [2,5,6,9,13,12,18,21,24,27,28,45,50]
function multiplesOfThree(){
    for(var index = 0; index < numbers.length; index++){
        if(numbers[index] % 3 == 0 && numbers[index] % 2 != 0){
        console.log('This is a multiple of 3', numbers[index])
    }
    }
}
multiplesOfThree();
 
//3) Reversed array
function reversedArray(){
    var array = [2,3,4,5,6,7,8,9,0]
    
    for( var index = array.length - 1;  index >= 0  ; index--){
         
        console.log('The array is', array[index]);
    }
}
reversedArray();

//4) Combined array
function combinedArray (){
var words =['zero','one','two','three']
var newWords =['four','five','six']
    words.push(newWords)
    console.log('the combined array is', words)
}
combinedArray()

//5) Maximum and Minimum number
function maxAndMinNumbers(){
    var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    var limit = 2
    var max = 14
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] < limit  ){
            console.log('Minimum number is' ,numbers[i] )
        }
        if(numbers[i] > max){
            console.log('Maximum number is' , numbers[i])
        }
    }
    //return numbers[index];
}

maxAndMinNumbers();

//6)Comparing two arrays with the same length
var firstArray = [1,3,5,7]
var secondArray = [2,4,6,8]
function comparedArray(){

} 
//7)square all elements in an array
function squaredNumbers(){
    var squaredElements = [1,3,4,5,6,7,8,9]
    for(var index = 0; index < squaredElements.length; index++){
       if((squaredElements[index] * squaredElements[index]) % 2 != 0){
       var answer = squaredElements[index] * squaredElements[index]
       }
        console.log('squared number is',answer ) 
        }
    }
squaredNumbers()