'use strict';

var router = require('express').Router();

module.exports = router;

router.get('/', function (req, res) {
    res.send('Hallo i am from user!');
})