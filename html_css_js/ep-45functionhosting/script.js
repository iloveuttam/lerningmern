//function hoisting only work this plane not ondiffrent function
sayname("uuttam");
console.log("lecture 45 hoisting in function");
function sayname(nam){
    console.log(nam);
}

//variable hoisting
console.log(age);//only move declation var age; not value
var age = 25;

//let and const are not support variable hoisting


//function call stack
//function are known as fisrt class citizen

//passing the function

/**
 * @param {{ (): void; (): void; }} greet
 * @param {string} fullname
 */
function mygreet(greet,fullname){
    console.log(fullname);
    greet();
}

function greet(){
    console.log("good morning");
}
mygreet(greet,"uutma");

function solve(number){
    return function(number){
        return number*number;
    }
}
let ans = solve(5);
let finalans = ans(10);
console.log(finalans);

//array storign the function in data structure

const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    }
];
var first = arr[0];
var add = first(2,5);
console.log(add);
var first = arr[1];
var add = first(2,5);
console.log(add);
var first = arr[2];
var add = first(2,5);
console.log(add);