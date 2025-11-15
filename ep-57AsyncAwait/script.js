//Async Await (async code into synchronus behaviour code
//await means flow is stoped at the code and wait for complete 
//look like a sequential behaviour
async function getdata(){
    setTimeout( function(){
     console.log("this is async function"); //always rerturn promise
    },3000);
}
let output = getdata();
console.log(output);

async function fetchdata(){
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //parse json ->asyn
    let data = await response.json();
    console.log(data);
}
fetchdata();
//scenario:
//prepare url/api endpoint ->sync
//await //fetch data ->network call ->async
//process data ->sync