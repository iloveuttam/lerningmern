//Array and Object
let obj = {
    name : "love",
    'full name' : "uttam Kumar",
    greet: function(){
        console.log("hello ji");
    }
};
console.log(obj);
obj.greet();
typeof(obj);
//shallow copy and deep copy

//ARRAY
let arr = [1,'uttam,3',5,6,];
console.log(arr);

//array constructor
let brr = new Array('ka be gandu', 'ha thik hu','chala ja');
console.log(typeof(brr));

let myarray = [1,2,3,'uk4',5];
console.log(typeof(myarray));
myarray.push('uttam');
myarray.pop();
myarray.shift();
myarray.unshift("kumar");
console.log(myarray);
//splice function
myarray.splice(2,3,'Pritam');
console.log(myarray); 
 let numarr = [10,20,30];
 //map function
let ansarray =numarr.map((nuber,) =>{
    return nuber*nuber;
})
numarr.map((number,index) =>{
    console.log(number);
    console.log(index);
})

//filter function
 let evennum = numarr.filter( (num) =>{
    if(num%2 == 0){
        return true;
    }
    else{
        return false; 
    }
});
console.log(evennum);

let dopla = [1,2,3,'uttam',4,9,'kumar'];
let khopla = dopla.filter( (value) =>{
    if(typeof(value) === 'string'){
        return true;
    }
    else{
        return false;
    }
});
console.log(khopla);

//reduce method
let rarray = [10,20,30,40];
let ans = rarray.reduce( (acc,curr) =>{
    return acc+curr;
},9);
console.log(ans);

//sort method
let narr = [3,8,1,45,39,90];
narr.sort();

//sort in descending order
narr.sort((a,b) => b-a);
console.log(narr);
 
//for each looop

narr.forEach( (value,index) =>{
    console.log(value,index);
});
 narr.sort();
//Traditional for loop
for (let index =0; index<narr.length; index++){
    console.log(narr[index]);
}

//for of loop
 for(let val of narr){
    console.log(val);
 };

// Array with Function
let uarr = [3, 8, 4, 59];

/**
 * @param {any[]} uarr
 */
function getsum(uarr) {
    let sum = 0;
    uarr.forEach((value) => {
        sum = sum + value;
    })
    return sum;
}

let total = getsum(uarr);
console.log( "total is" ,total);
