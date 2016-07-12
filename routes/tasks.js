var express = require('express');
var router = express.Router();
var mongoose   = require('mongoose');
var Task = require("../models/tasks.js");
mongoose.connect('mongodb://'+process.env.MONGO_PORT_27017_TCP_ADDR+':'+process.env.MONGO_PORT_27017_TCP_PORT);

//Get tasks
router.get('/', function (req, res) {
    Task.find({}, function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.json(docs);
        }
    });
});

//Create task
router.post('/', function (req, res) {

    var task = new Task();
    task.name = "Task";

    task.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Task created!' });
    });
});

//Get task by ID
router.get('/:task_id', function(req, res){
    Task.findById(req.params.task_id, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
});

//Update task by ID
router.put('/:task_id',function(req, res) {

    Task.findById(req.params.task_id, function(err, task) {

        if (err)
            res.send(err);

        // task.name = req.body.name;  // update the task info
           task.name = "Updated task";

        task.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Task updated!' });
        });

    });
});

router.delete('/:task_id', function(req, res) {
    Task.remove({
        _id: req.params.task_id
    }, function(err, task) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});


module.exports = router;




