//Event Listner
// function changeText(){
//     let fpara = document.getElementById('fpara');
//     fpara.textContent ="Uttam Ka jadu";
// }
// let fpara = document.getElementById('fpara');
// fpara?.addEventListener('click' ,changeText);

//fpara.removeEventListener('click',changeText); best practise is used as it is not create function in the eventlister

//phases of Event
//the function which is triggered by eventlistner give some event mera man receive karo print karo ya na karo

// function changeText(event){  //here we recieve the event 
//     console.log(event);   //as our wish utilize
//     let fpara = document.getElementById('fpara');
//     fpara.textContent ="Uttam Ka jadu";
// }
// let fpara = document.getElementById('fpara');
// fpara?.addEventListener('click' ,changeText);

// //changing the work of anchor tag
// let anchorElement = document.getElementById('fanchor');

// anchorElement?.addEventListener('click',function(event){
//     event?.preventDefault();
//     anchorElement.textContent = "bhagg ya se"
// });

// let paras = document.querySelectorAll('p');

// for(let i =0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click',function(){
//         alert("you have clicked on para" +(i+1 ));
//     })
// };


/**
 * @param {{ target: { textContent: string; }; }} event
 */
let paras = document.getElementById('wrapper');
function alertpara(event){
    
    alert("jaldi yaha se hato" + event.target.textContent);
}
document.addEventListener('click',alertpara);
