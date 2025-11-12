//Functions
//reusable code 
console.log("kya be gandu");
function print5(){
    console.log("ha bol na ");
}
print5();//function call
let i = 0; 

/**
 * @param {number} i
 */
function printcounting (i){ //parameter
    for ( ; i<5; i++){
        console.log(i);
    }
}
printcounting(i);//argumetn
/**
 * @param {number} num1 //special comments
 * @param {number} num2  //for understanding of the vs code that the parameter was number
 */
function average(num1 , num2){
   return ((num1+num2)/2);

}
console.log(average(4,9));


//return the value


const getMultiplication = function(/** @type {number} */ a,/** @type {number} */ b){
    return a*b;
}
let  ans = getMultiplication(2,90);
console.log(ans);

//arrow function
let getExp = (/** @type {number} */ x,/** @type {number} */ y) =>{
    let ans = x**y;
    return ans;
}
console.log(getExp(2,20));