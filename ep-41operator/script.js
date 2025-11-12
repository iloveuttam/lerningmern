console.log("this is operator tutorial");

let a = 10;
let b = 5;

console.log(a**b);
console.log(a+b);

//unary operator
//preincrement and postincrement 
console.log(a--);
console.log(a);
//assignment operator
let c = a+b;
console.log(c);
c +=c;
console.log(c);

//comparision operator
//answer will be true false

let x = 10;
let y = '10';
console.log(x);// value is same but type is not

//ternary operator
let age =1;
(age>=18) ? console.log("i can vote") :console.log("i cant vote");

//logical operator && || !

//working with non boolean
//falsy and truthy
console.log(true && 0);
console.log(true && 'uttam');
//Returns the first falsy value it finds,
//Or the last value if all are truthy.


//bitwise operator
//operation are performend in binary language
// & | ~ << >> ^
//and or not left right shift xor

console.log(2^5);
console.log(~3);

//conditionals 