let score = "22abc";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
console.log("-------");


let score1 = null;

console.log(typeof score1);
console.log(typeof (score1));

let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber1);
console.log(valueInNumber1);
console.log("-------");


let score2 = undefined;

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber2);
console.log(valueInNumber2);
console.log("-------");

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
console.log("-------");

// 1 => true; 
// 0=> false;
// "" => false;
// "Arnav" => true;


let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);