

let firstPromise = new Promise( (resolve,reject) =>{
    console.log("hi there is uttam here");
    reject(new Error("internal server error"));
    
});

//asynchronus code = function + duration



let SecondPromise = new Promise( (resolve,reject) =>{
    
    setTimeout(function myname(){
    console.log("Uttam Kumar");
},9000);
resolve(1);
    
});

let promise1 = new Promise((resolve,reject)=>{
    let sucess = true;
    if(sucess){
        resolve("Promise Fullfilled");
    }
    else{
        reject("promise Rejected");
    }
});

promise1.then((m)=>{
    console.log("then ka message is " + m);
}).then( (message) =>{
    console.log("first masg:" + message);
    return "Promise fulfilled second message";
}).then( (message)=>{
    console.log("second msg:" +message);
}).catch( (error)=>{
    console.log("this is internal servor401:" + error)
}).finally( (message)=>{
     console.log("jhalk dikh laza"+message);
})



//multiple promise
let p1 = new Promise( (resolve,reject)=>{
    setTimeout(resolve,1000,"first");
})
let p2 = new Promise( (resolve,reject)=>{
    setTimeout(resolve,2000,"second");
})
let p3 = new Promise( (resolve,reject)=>{
    setTimeout(reject,3000,"third");
})
Promise.all( [p2,p3,p1]).then((value)=>{
    console.log(value);
}).catch( (error)=>{
    console.log("hh beta:" +error);
})
