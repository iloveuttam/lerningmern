for(let i =1; i<=10; i++){
    console.log(i);
}
console.log("reverse printing");
for(let i =10; i>0; i--){
    if(i==5){
        continue;
    }
    console.log(i);
    if(i ==3) {
        break;
    }
}
//while loop
console.log("while loop")
let i =1;
while (i<=10){
    console.log(i);
    i++;
}
//do while loop
console.log("do whiie loop")
let x = 1;
do{
    console.log(x);
    x++;
}while(x<=10);

//strings
// sequence of character
let nam = 'uttam';
let lastname= "kumar";
let spn = `uttam 
kuam 
jfs`;
console.log(spn);
let firstname= new String ("Uttam Kumar");
let fullname = nam + lastname;

//using backtics
let finalname = ` ${nam} + ${lastname}`;
console.log(firstname,fullname);
console.log(firstname);
console.log(fullname);

console.log(nam.length);
console.log(nam.toUpperCase());
let str = " kya be kalua bhosdiwale";
console.log(str.substring(0,16));
let word = str.split(' ');
console.log(word);