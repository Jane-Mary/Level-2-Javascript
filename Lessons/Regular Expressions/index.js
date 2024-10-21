//  const regExpStr = 'Hello world! hello there';

// const regExpLiteral = /Hello/gi;

// console.log(regExpStr.match(regExpLiteral));

// const regExpConstructor = new RegExp('xyz', 'gi'); // With flag -g

// const str = 'xyz Xyz';

// console.log(str.match(regExpConstructor));

// // \d – matches any decimal digit and is shorthand for [0-9].
// // \w – matches any alphanumeric character which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9_].
// // \s – matches any white space character.
// // \D – matches any non-digit and is the same as [^0-9.]
// // \W – matches any non-word (that is non-alphanumeric) character and is shorthand for  [^A-Za-z0-9_].
// // \S – matches a non-white space character.
// // . – matches any character.
// // \b matches the start or end of a word. The word is matched according to the position of the metacharacter.
// // \B - it is the opposite of \b.


// const regexPattern = /ambi[ea]nce/;

// console.log(regexPattern.test('ambiance')); // Output: true

// console.log(regexPattern.test('ambience')); // Output: true

// //QUALIFIERS 

// //+ will match any character it is appended to if the character appears at least once.
// //* is similar to the + character but with a slight difference. When you append * to a character,
// // it means you want to match any number of that character including none.
// //? implies "optional". When you append it to a character, it means the character may or may not appear.
// //{N}, when appended to a character or character class, specifies how many of the character we want.
// // For example /\d{3}/ means match three consecutive digits.
// //{N,M} is called the interval quantifier and is used to specify a range for the minimum and maximum possible match.
// // For example /\d{3, 6}/ means match a minimum of 3 and a maximum of 6 consecutive digits.
// //{N, } denotes an open-ended range. For example /\d{3, }/ means match any 3 or more consecutive digits.

// const regExp = /abc+(xyz+)+/i;

// console.log(regExp.test('abcxyzzzzXYZ')); // Output: true


//numbers
const pattern = /^(67)[0-9]{7}$/
console.log(pattern.test('671234590'));

const pattern1 = /^\b[65]+\d{7}$/
console.log(pattern1.test('654653056'));

const pattern2 = /^\b[68]+\d{7}$/
console.log(pattern2.test('683732537'));

const pattern3 = /^\b[696?]+\d{6}$/
console.log(pattern3.test('696153012'));

const pattern4 = /^\b[655]+\d{6}$/
console.log(pattern4.test('655706894'));

const pattern5 = /^\b[665?]+\d{6}$/
console.log(pattern5.test('665309309'));

const pattern6 = /^\b[626?]+\d{6}$/
console.log(pattern6.test('626675867'));

const pattern7 = /^\b[634?]+\d{6}$/
console.log(pattern7.test('634899898'));


//Password
// const regexPattern = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$/i;
// console.log(regexPattern.test('abcdef123@gmail.com'));

//  const password = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/
//  console.log(password.test(''));


camerRegex = /^\+237[6][235789]\d{7}$/
console.log(camerRegex.test(+237621234567));

const password = /([A-Z]+)(\d+)(\W+)[A-Za-z\d\W\w]{8,}$/