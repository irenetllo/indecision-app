const square = function(x){
    return x * x;
}
//const squareArrow = (x) => {
 // return x * x;  
//};

const squareArrow = (x) => x * x;

//console.log(square(8));
//console.log(squareArrow(9));
 

const fullNameFun = (fullName) => {
  return fullName.split(' ')[0];
};

const firstName = (fullName) => fullName.split(' ')[0];

console.log(fullNameFun('Irene Tello'));
console.log(firstName('Irene Tello'));
