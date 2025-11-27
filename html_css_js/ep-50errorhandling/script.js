console.log("Error Handling");
//compile time error bina code run kare pata lag fya syntax erro
// console.log9;

//Runtime erro
// @ts-ignore
// console.log(b);//  //refrence error


try{
    console.log("try block starts here");
    // @ts-ignore
    console.log(x);
    console.log("try ends here");

}
catch(err){
    console.log("i am inside here");
    console.log("your error is here:",err);
}
//finally block executed compulsory
finally{
    console.log("mai to chalunga hi meri marzi");
}

//Generating custom error from throws keyword
try{
    
    // @ts-ignore
    console.log(n);//refrence error
}
catch(err){
    console.log("hiii");
     throw new Error ("pahle declare kare phir use kare");
}



