//Create an object using the object literal notation

var user = {
    name: 'Kambang',
    age: 20,
    gender: 'Male',
    score: [],
    languages: {
        en: 'ENG',
        fr: 'FRE',
    },
    isMarried: true
}
//   user.score.push(30);
//   user.score.push(20);
//   user.score.push(10);
//   user.languages.ger = 'GER';
//   user.languages.chi = 'CHI';
//   user.giftByGod = 'Yohann'
//   console.log(user.giftByGod)
//   console.log(user.score);
//   console.log(user.languages);

//   console.log('languages',user['languages']);

//   user.sayHi = function (){
//      return ' Good Morning';
//     }

//     console.log({user}); 

//Dictionary Exercise
var defs = [
    'One is the second number in the numbering system',
    'Two is a good number for couples',
    'Three is a great number to represent the Cameroon flag',
    'Four is...',
    'Five is ...'
]

var numberDictionary = {}

for (var index = 0; index < defs.length; index++) {
    numberDictionary[index + 1] = defs[index]
}
 console.log('Dictionary', numberDictionary)

//Object Methods

//Object.freeze => It freezes an object such that properties can't be added to it
//after the object is defined
var freezeNumberDict = Object.freeze(numberDictionary);

// 2) Object.keys =>It returns all the keys of an object as an array
var dictionaryKeys = Object.keys(numberDictionary);
console.log('dictionary keys +>', dictionaryKeys)

//3) Object.values => This returns all the values of the various keys in the object
//It returns them as an array
var dictionaryValues = Object.values(numberDictionary);

//4) Object.entriies => It returns the properties of an object as arrays
//var dictionaryEntries = Object.entries(numberDictionary);

//5) Object.create => Creates a brand new empty object if no arguments are passed
//Else creates a new object from the object 
// var newObj = Object.create();

var obj = {
    value: [
        {
            name: 'Kambang',
            marks: [
                {
                    js: 20,
                    python:
                     {
                        django: [30, 10, 23]
                    }
                }
            ]
        }
    ]
}
//Write a code to output  what's in DJANGO
console.log(obj.value[0].marks[0].python.django)
