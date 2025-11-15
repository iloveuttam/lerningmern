


//code 1

const t1 = performance.now();

for(let i =1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "this is para " + i; 
    document.body.appendChild(para); //repaint 100 times and reflow 100 time
}

const t2 = performance.now();
console.log("total time by code 1:" + (t2-t1));


const t3 = performance.now();

//code 2

let mydiv = document.createElement('div');
for(let i =1 ; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "this is middle" +i;
    mydiv.appendChild(para);  //repaint 100 times
}
document.body.appendChild(mydiv);//only onen reflow

const t4 = performance.now();

console.log("total time by code 2:" + (t4-t3));
//code two is faster



//best code
console.log("the best and faster way to write the code using the document fragment");
const t5 = performance.now();
let fragment = document.createDocumentFragment();
for(let i =1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = 'this is best code' +i;
    //no reflow and no paint take
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6 = performance.now();
console.log("total time by code 3:" + (t6-t5));
