const regExpStr = "Hello Word! heLLo  there";
const regExpLitteral = /Hello/gi

// console.log(regExpStr.match(regExpLitteral));


const regExpConstructor = new RegExp('xyz', 'gi'); // With flag -g

const str = 'Xyz xyz';

// console.log(str.match(regExpConstructor));

const regexPattern = /ambi[ea]nce/;

console.log(regexPattern.test('ambiance')); 
console.log(regexPattern.test('ambience')); 
console.log(regexPattern.test('ambieance')); 
console.log(regexPattern.test('ambiaence')); 
