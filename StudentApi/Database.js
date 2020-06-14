const mongoose = require('mongoose');

//Set up default mongoose connection
mongoose.connect('mongodb://localhost:27017/studentDB', (err) => {
    if(!err)
    console.log("MangDB Connected to MangoBd");
    else
    console.log("Error In DB Connection :" + JSON.stringyfy(err,undefined,2));

});

module.exports = mongoose;
