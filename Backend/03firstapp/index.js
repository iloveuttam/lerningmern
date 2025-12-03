//require(); to object and module include uses
const express = require('express');
const app = express();//application initialize
//application run on the particular port and request resolve acoording to the port

// variable thant store the port number 
const port = 1000;

app.get('/', (req, res) => {
  res.send('hello world')
});

//start our server 

app.listen(port, () =>{
    console.log("appclication start ho gay hai");
});



