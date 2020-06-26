//arguments object - no longer bound with arrow finctions
/**
const add = (a, b) => {
    console.log(arguments);
    return a + b;
};
 */

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

//console.log(add(51, 1, 1001));


//this keyword - no longer bound

const user = {
    name : 'Irene',
    cities : ['Caceres', 'Londores'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
        /*this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        })*/
        
    }
};

console.log(user.printPlacesLived());


//challenge .

const multiplier = {
    numbers : [1, 2, 3, 4],
    number : 2,
    multiply(){
        return this.numbers.map((mult) => mult * this.number);
    }
};

console.log(multiplier.multiply());




