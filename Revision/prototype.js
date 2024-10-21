
// function Person(fName, lName){
//     this.firstName = fName;
//     this.lastName = lName;
// }

// const person_mike = new Person('Mike', 'Carlos');
// const person_wallice = new Person('Mua', 'Wallice')

//  person_mike.getFullName = function  (){
//      return `${this.firstName} ${this.lastName}`
//  }

//  person_wallice.getFullName = function  (){
//      return `${this.firstName} ${this.lastName}`
//  }

//  Person.prototype.getFullName = function  (){
//      return `${this.firstName} ${this.lastName}`
//  }
//  console.log( person_mike.getFullName())
//  console.log( person_wallice.getFullName())
 
// function SuperHero(){
//     this.isSuperHero = true
// }

// SuperHero.prototype.fightingCrime = function(){
//     console.log('Fighting Crime')
// }


// const laure = new SuperHero()
// console.log(laure.fightingCrime());

class Person {
  constructor (fName ,lName){
    this.fName = fName;
    this.lName = lName;
}
sayMyName(){
    return `My name is ${this.fName} ${this.lName}`
}
}

class SuperHero extends Person {
    constructor(fName,lName){
        super(fName,lName)
        this.isSuperHero = true;
    }
    fightingCrime = function(){
        console.log('Fighting crime')
    }
}
const p1 = new Person('Mike','Carlos')
console.log(p1)
 