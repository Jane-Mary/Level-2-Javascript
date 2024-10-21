/** 
* OPERATORS in JS
* 1) Arithmetic Operators
* 2) Logical Operators
* 3) Comparison Operators
* 4) Increment/Decrement operators (++, --)
* 5) Others (Tenary, Null Coalescing, Optional chaining operator)
*/

//ARITHMETIC (+, -, *, /, %)
var bensAge = 10;
var blessAge = 12;

var totalAge = bensAge + blessAge;// Addition Operation
console.log(' Total Age is =',totalAge)


//Subtraction Operation
var subtractedAge = bensAge - blessAge;
console.log('Subtracted Age is =', subtractedAge)

//Division Operation
var dividedAge = bensAge / blessAge;
console.log('Divided Age is =', dividedAge)

//Multiplication Operation
var multipliedAge = bensAge * blessAge;
console.log('Multiplied Age is =', multipliedAge)

//Modulo Operation
var moduloAge = bensAge % blessAge;
console.log('Modulo Age is =', moduloAge)

//LOGICAL OPERATORS (&&, ||, !)

// Logical AND (&&)
var male = false;
var isTall = true;

var outcome = male && isTall
console.log('Checking outcome of logical AND ', outcome)

// Logical OR (||)
var outcome = male || isTall
console.log('Checking outcome of logical OR ', outcome)

// Comparison Operators ( >, <, <=, >=, ==, ===, !=, !==)

var benard = 17.6;
var ruth = 17;
var roy = 17.2;
var prince = 10;
var chris = 17;
var success = 5;
var totalScore = 20;

// >(Strictly Greater than)
var isStrictlyGreater = benard > ruth
console.log('isStrictlyGreater ', isStrictlyGreater);

// <(Strictly Less than)
var lessThan = ruth < benard
console.log('less than', lessThan);

// >=( Greater than or Equal to)
var greaterThanOrEqual = chris >= ruth
console.log('Greater Than Or Equal', greaterThanOrEqual)

// <=(Less than or Equal to)
// ==(Equal to)
var equalTo = ruth == chris;
console.log('Equal To', equalTo)

// !=(Not Equal to)
var notEqualTo = ruth != success;
console.log('Not Equal To', notEqualTo);

var averageScore = '20';
var actualScore = 20;

// ==(Equal to)
var testAverage = averageScore == actualScore
console.log('Average and Actual', testAverage); // '20'=='20'

// ===(Strictly Equal to)
var testAverage = averageScore === actualScore
console.log('Average and Actual', testAverage);

// !== (Strictly Not Equal to)

//Negation Operator (!)
var isSmaller = !(100 < 1000);
console.log('isSmaller', isSmaller)

//Increment/Decrement Operators

//Increment (++) (Add one to the original value)

var amount = 500;
// ++amount => Add one and use the new value
// amount++ => Use the original value then add one after

var newAmount = ++amount;
console.log('New Amount =>', newAmount)

// Decrement Operator (--) (behaves same as the increment and instead subtracts one)

/**
 * OTHER OPERATORS
 */
//Multiplication ,Addition, Subtraction, Division/ Assignment Operation
var test = 20;
var coefficient = 3;
 //test = test * coefficient;
 test *= coefficient // Multiplication Assignment
 test += coefficient // Addition Assignment
 test -= coefficient // Subtraction Assignment
 test /= coefficient // Division Assignment
 test %= coefficient // Modulo Assignment
console.log('Real Test Mark =>', test)

//Tenary Operator (condition ? action : fallback)
var bloodGroup = 'O-';
var hisBloodGroup = 'B+';
var canDonateBlood = hisBloodGroup == bloodGroup ? 'He can donate' : 'He cannot';
console.log('Output is =>', canDonateBlood);

