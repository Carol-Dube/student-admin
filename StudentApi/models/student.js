const mongoose = require("mongoose");

var Student = mongoose.model('Student', {
    Name:{type: String},
    IDNumber: {type: Number},
    Email: {type: String},
    Modules: [String],
    DateReg: {type: Date},
    DateEdited: {type: Date},

});

module.exports = {Student};
