const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./Database.js");

var studentController = require('./controllers/studentController.js');

var app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, ()=> console.log('server started at port : 3000'));

app.use('/students',studentController);

