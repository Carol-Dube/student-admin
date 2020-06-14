const express = require("express");

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Student } = require('../models/student');

// => localhost:3000/students
router.get('/',(req,res) =>{

    Student.find((err,docs) => {
            if(!err){res.send(docs);}
            else { console.log("error in retriveing Students:" + JSON.stringify(err,undefined,2));}
    });

})

router.get('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`no records with given Id:" + ${req.params.id}`);

        Student.findById(req.params.id,(err,doc) => {
            if(!err){res.send(doc);}
            else { console.log("error in retriveing Student:" + JSON.stringify(err,undefined,2));}
        });
        
});


router.post('/',(req,res) => {
        var stnd = new Student({
            Name:req.body.Name,
            IDNumber: req.body.IDNumber,
            Email: req.body.Email,
            Modules: req.body.Modules,
            DateReg: req.body.DateReg,
            DateEdited: req.body.DateEdited,
        });
        
        stnd.save((err,doc) => {
            if(!err){res.send(doc);}
            else { console.log('Error in Student save:' + JSON.stringify(err,undefined,2));}
        });
});

router.put('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no records with given Id:" + ${req.params.id}`);

    var stnd = {
        Name:req.body.Name,
        IDNumber: req.body.IDNumber,
        Email: req.body.Email,
        Modules: req.body.Modules,
        DateReg: req.body.DateReg,
        DateEdited: req.body.DateEdited,
    };

    Student.findByIdAndUpdate(req.params.id,{ $set:stnd},{ new:true}, (err,doc) => {
        if(!err){res.send(doc);}
        else { console.log('Error in Student Update:' + JSON.stringify(err,undefined,2));}
    } );
    
});

router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`no records with given Id:" + ${req.params.id}`);

    Student.findByIdAndRemove(req.params.id,(err,doc) => {
        if(!err){res.send(doc);}
        else { console.log('Error in Student Delete:' + JSON.stringify(err,undefined,2));}
    });
});




module.exports = router;