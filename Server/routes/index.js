var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.html');
});

/* GET dashboard page. */
router.get('/dashboard', function(req, res, next) {
    res.render('index.html');
});

/* GET tasks page. */
router.get('/tasks', function(req, res, next) {
    res.render('index.html');
});

//Get detail by ID
router.get('/detail/:task_id', function(req, res){
    res.render('index.html');
});

module.exports = router;
