//Write a function that returns all even numbers that are multiples of three

var numbers = [2,5,6,9,13,12,18,24,28,45,50]
function multiplesOfThree(){
    for(var index = 0; index < numbers.length; index++){
        if(numbers[index] % 6 == 0){
        console.log('This is a multiple of 3', numbers[index])
    }
    }
}
multiplesOfThree();
 

