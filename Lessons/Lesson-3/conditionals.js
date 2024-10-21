// Typeof Operator
var jane = 'Lady';
var score = 300;
var isCoding = true;

var type = typeof (jane)
console.log('The type of jane is =>', type);

//Conditional Statements in JS
/**
 * They help us check for some conditions which when satisfied,
 *  performs some predefined action while ELSE performs a differnt action.
 * To achieve this we use the if...else statement, switch...case,
 * or the tenary operator
 */

//If...else statement
//SYNTAX
/*
if(condition){
    // Action to be performed if condition=true
}
else{
    //Action to be performed if condition=false
}
*/
//EXAMPLE
var expectedAge = 18;
var myAge = 99;
var ancestorAge = 100;

// Display Information based on my age
if(myAge >= expectedAge && myAge < ancestorAge){
    alert('You have come of age, go and MARRY!!!')
}
if(myAge > 100){
    alert('Ancestors dont marry')
}
else{
    alert('Babies dont marry. Please go home and GROW UP!!')
}

//NESTED If...else statements
/** SYNTAX
    if(condition){
        Action to be performed
    }
    else{
        if(condition){
            Action to be performed
        }
    }
 */
if(myAge == expectedAge){
    alert('You have come of age, go and MARRY!!!')
}
else{
    if(myAge > 100) {
        alert('Ancestors dont marry')
    
    }
    else{
        if(myAge < expectedAge){
            alert('Babies dont marry. Please go home and GROW UP!!')

        }
    }
} 

//SYNTAX for SWITCH...CASE
/**
 * switch(variable){
          
    case condition:
        action to be performed
        break;
    case condition:
            Action to be performed
            break;
    default:
            Action to be performed
            break;
}
 */
//EXAMPLE
var a = 18;
var b = 99;
var c = 100;

switch(a > b && b < c){
    case true:
      alert('a greater than b')  
     break;
    case false:
        alert('b greater than a')
         break;     
    default:
         alert('we dont know who is greater')
         break;
}
