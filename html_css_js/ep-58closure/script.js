//clousure
function outerfunction(){
    let name = "Babbar";
    function innerfunction(){ //babbar is bindding to the 
                              //innerfunction in nested function 
                              //only refrence is share
        console.log(name);
    }
   return   innerfunction;
}
let inner = outerfunction();
inner();//output get babbar