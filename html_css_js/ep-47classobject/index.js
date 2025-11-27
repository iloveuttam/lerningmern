// //Classes
// console.log("how are you");
// class human{
//     fullname = "Uttam kumar";
//     age = 21;
//     #salary = 0 ; //private members

//     constructor(newname , newage , newsalary){
//         this.age = newage;
//         this.fullname =newname;
//         this.#salary = newsalary
//     }

//     behavious (){
//         console.log("very good" );
//     }
//     stamina(){
//         console.log("over powered to harm",this.#salary);
//     }
//     //getter and setter for the private member
//     get fetchsalary(){
//         return this.#salary;
//     }
//     /**
//      * @param {number} val
//      */
//     set setsalary (val) {
//         this.#salary = val; 
//     }
// }
 
// let obj = new human("Pritam ", 34,800000);
// obj.stamina();
// console.log(obj.fullname);
// // console.log(obj.#salary);//fat gya beta
// // obj.setsalary(100);
// let newsal =obj.fetchsalary;
// console.log(newsal);

function sayname(myname = "bhagwan"){
    console.log("my name is :",myname);
}
sayname("uttma ");

/**
 * @param {string} fname
 */
function alname(fname,lname ="kumar"){
    console.log("my nameis :",fname ,lname );
}
alname("uttam");

/**
 * @param {string} fname
 */
function alame(fname,lname =fname.toUpperCase()){
    console.log("my nameis :",fname ,lname );
}
alame("uttam");

//using the function in the default parameter
function minage(){
    return 70;
}
function util(name = "Uttam", age = minage()){
    console.log("my name is " ,name,"and age is ", age);
}
util();

