//For...loop
//for(initialization;condition;increment/decrement){
    //This code will execute repeatedly until the condition resolves to 'false'
//}


//Example
//Implement a counter that counts from 1 to 10
//Without a loop
//var counter = 0;
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);
//console.log('counter now is', ++counter);

for (var counter = 0; counter <= 10; counter ++) {
    if(counter !== 0 && counter % 2 == 0)
    console.log('Counter now is', counter);
}

// SIMPLE EXERCISE 1
// Write a counter that counts from 0 to 10
// When it meets an even number it should alert 'even number found'
// If it meets an odd number ,it should alert 'odd number found'

//SOLUTION
for (var counter = 0; counter <= 10; counter++){
   if(counter % 2 == 0) {
   alert('even number found')
   }
   else{
    alert('odd number found')
   }
    console.log('counter now is', counter);
}

// While...loop
//while(condition){
    //this block of code executes repeatedly if condition=true
    // things to note about the while...loop
    //1) It takes just one parameter which is required 
    //2) Initialization is done outside(before) the while loop
    //3) Increment/Decrement is done within the while loop 
    //4) For all loops, always ensure there  is a condition that breaks the loop
    //(BASE CONDITION) except you intentionally want to create an INFINITE LOOP
//}

//Count from 0-10 using a while loop

//1) Initialize before the loop
var counter = 0;

//2) Give a condition to the loop
while (counter <= 10){ 
    //counter++
    console.log('Counter is', counter);
    //3) Increment/Decrement within the loop
    counter++;
}

var forCounter = 0
for(; forCounter <= 10;) {
    console.log(' For Counter is', forCounter);
    forCounter++;
}

//Do....While
var c = 0
do{
c++
}
while(c<10)
console.log(c);