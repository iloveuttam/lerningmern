const express = require('express');
const app = express();
const port = 3000;

//import item ki router file
const item = require('./routes/item');
const birds = require('./routes/birds');
//load into application
app.use('/api',item);
app.use('/fill',birds);

app.listen(port, () => {
  console.log(`Uttam is listening on port ${port}`);
});
