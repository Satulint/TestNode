'use strict';

console.log('Hello there');

const express = require('express');
const app = express();

app.use(express.static('public'));
 
app.get('/', (req, res) => {
  res.send('Hello World!!');
  res.send('Moi');
});
 
app.listen(3000);



