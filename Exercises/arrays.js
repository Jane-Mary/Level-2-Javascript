//Simple array exercises

var studentScoreInExam = [10, 17, 13, 17, 19, 10];

//Coefficient of exams = 5
// Highest mark = 100

//Find the actual score of each student
//Find the average score of the class
// Find the student index with the highest score

//Solution
var coefficient = 5;
var highestMarks= 100;

//1) Find actual score
for(var index = 0; index < studentScoreInExam.length; index++){
    var actualScore = studentScoreInExam[index] * coefficient //This is the trick
    console.log('Actual score is', actualScore)
}

//2) Find the average score
// var numberOfScores = 6
// var studentScore = 10 + 17 + 13 + 17 + 19 + 20
// console.log('Student score is', studentScore)
// var averageScore = studentScore/ numberOfScores
// console.log('Average score is', averageScore)
var averageScore = 0;

function averageScoreCalculator(array){
    var sumTotal= 0;
    for(var index = 0; index < array.length; index++) {
        sumTotal += array[index];
    }
    return sumTotal/ array.length;
}

averageScore = averageScoreCalculator(studentScoreInExam);
console.log('Average score is ', averageScore);

//3)Find the student index with the highest score
// var max = Math.max(...studentScoreInExam);
// var index = studentScoreInExam.indexOf(max);
// console.log('Index number is', index) 

//index, highest score
//Algorithm
/**Look for the highest score ->{}
 * find it's index
 */

var maxScore = 0 
var maxScoreIndex = 0
var studentScoreInExam = [10, 17, 13, 17, 19, 10];

for(var index = 0; index < studentScoreInExam.length; index++){
    if(studentScoreInExam[index]>maxScore){
        maxScore=studentScoreInExam[index];
        maxScoreIndex=index;

    }
} 
console.log('The index is', maxScoreIndex)
//Write a function that returns all even numbers that are multiples of three
var allEvenMultiples = function(someArray){
for(var index = 0; index < someArray.length; index++){
    if(someArray[index] % 2 == 0 && someArray[index] % 3 == 0) {
        console.log('Number is',someArray[index])
    }
}
}
allEvenMultiples([2,6,4,8,24,36])

