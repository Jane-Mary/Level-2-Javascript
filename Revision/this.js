//Implicit Binding Rule
// const Person = { 
//     name: 'Jane',
//     sayMyName : function sayMyName(){
//         console.log(`My name is ${this.name}`);
//     }
// }
// Person.sayMyName();

//Explicit Binding Rule
// const Person  = { 
//     name: 'Jane'
// }
//  function sayMyName(){
//     console.log(`My name is ${this.name}`);
// }
// sayMyName.call(Person)

//New Binding Rule
const Person  = { 
    name: 'Jane'
}
 function sayMyName(){
    console.log(`My name is ${this.name}`);
}
//sayMyName.call(Person)
function Person(name){
    this.username = name;
    this.age = 22
}

const p1 = new Person('Mike',22);
const p2 = new Person('Carlos',21);
console.log(p1,p2);

//Default Binding Rule
