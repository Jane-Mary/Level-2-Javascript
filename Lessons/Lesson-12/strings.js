let greeting = 'Hello,,,,,, .... /// welcome';

// //String concatination(+)
//greeting = greeting + 'o' 
// console.log(greeting) 

//Parse the string above to get only valid characters

const charSet = ['H','e','l','o','w','c','m'];
let newString = '';
let i = 0
while(i < greeting.length){
    if(charSet.includes(greeting[i])){
        //newString = newString + greeting[i]
        newString += greeting[i]
    }
    i++
}
console.log('Valid characters are', newString)

const emailValidator = (email='') =>{
    let requiredCharacters = ['@gmail' , '.' , 'com'];

    let i = 0 ;
    while(i < email.length){
        if(!requiredCharacters.includes(email[i])){

        }
    }
}

// split, startsWith, endsWith, substr, replace ,toUpperCase() ,toLowerCase()


