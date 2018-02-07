'use strict';

var router = require('express').Router();

module.exports = router;

router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Home'
    });
})