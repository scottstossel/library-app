const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/library-app')
  .then(() => console.log('Database Connected...'));


//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routes

const port = 5000;
app.listen(port, () => {
  console.log('Server running...');
})
