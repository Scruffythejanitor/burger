const express = require('express');

const router = express.Router();
const burger = require('../models/burger')

router.get('/', function(req, res){
    burger.all(function(data){
        res.render('index', {burger: data})
    })
});

router.post('/api/burger', function(req, res){
    buger.add('burger_name', req.body.burger_name, function(result){
        res.json(result)
    })
});

module.exports = router;