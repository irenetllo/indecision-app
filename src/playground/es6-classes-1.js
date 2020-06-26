// car class
/*
make
model
vin
 getDescription - all details

*/

class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age= age;
    }
    getGretting(){
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old`;
    }

}

class Student extends Person{
    constructor (name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        return this.hasMajor() ? `${super.getDescription()} and im studing ${this.major}!` : super.getDescription();
    }
}

class Traveler extends Person{
    constructor (name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasLocation(){
        return !!this.homeLocation;
    }
    getDescription(){
        return this.hasLocation() ? `${super.getDescription()}. I'm visitiong from ${this.homeLocation}!` : super.getDescription();
    }
}

const me = new Traveler('Irene', 27, 'Spain');
const other = new Traveler();
console.log(me.getDescription());
console.log(other.getDescription());