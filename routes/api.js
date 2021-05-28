const express = require('express')
const router = express.Router()
const task = require('../models/task');
router.get('/tasks',function(req,res,next){
    task.find({}).then(function(tasks){
        res.send(tasks);
    }).catch(next);
});

// add a new student to database
router.post('/tasks',function(req,res,next){
    task.create(req.body).then(function(task){
        res.send(task);
    }).catch(next);
});

// update a student in the database
router.put('/tasks/:id',function(req,res,next){
    task.findOneAndUpdate({_id: req.params.id},req.body).then(function(task){
        task.findOne({_id: req.params.id}).then(function(task){
            res.send(task);
        });
    });
});

// delete a student in the database
router.delete('/tasks/:id',function(req,res,next){
    task.findOneAndDelete({_id: req.params.id}).then(function(task){
        res.send(task);
    });
});
module.exports= router;