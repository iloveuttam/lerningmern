

const express = require('express')
const router = express.Router()

//define the home page route

// GET request
router.get('/', (req, res) => {
    res.send("Go to get request");
  //res.sendFile('../index.html',{root:__dirname});
});

// POST request
router.post('/items', (req, res) => {
  //res.send("Got a POST request");
  res.json({x:1,y:2,z:3});
});

// PUT request
router.put('/items/:id', (req, res) => {
  res.send(`Got a PUT request for item id = ${req.params.id}`);
});

// DELETE requestj   
router.delete('/items/:id', (req, res) => {
  res.send(`Got a DELETE request for item id = ${req.params.id}`);
});


module.exports = router