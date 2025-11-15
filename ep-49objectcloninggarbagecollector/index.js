console.log("garbage collector and object clonning");
let obj = {  // dynamic in nature 
    age :21,
    wt:50,
    ht:162,
    name :"uttam"
};
//iteration cloning
let des = {};
for(let key in obj){
    let newkey = key;
    // @ts-ignore
    let newvalue = obj[key];
    // @ts-ignore
    des[newkey] = newvalue;
}
let refrenceclone = obj; // value changes in original affect on the refrence clone

let cloneobj = { ...obj}; //  1 clone using spread opreator
console.log(obj);
// @ts-ignore
obj.color = "fair";
console.log(obj);
console.log(cloneobj);
console.log(obj);

//2 method using assing
let assingclone = Object.assign({},obj)
console.log(assingclone);
console.log(des);