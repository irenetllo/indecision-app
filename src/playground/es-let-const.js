var nameVar = 'Irene';
nameVar= 'mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Hola';
nameLet = 'Adios';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping

const fullName = 'Irene Tello';

if(fullName){
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);