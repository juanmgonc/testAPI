const express = require('express');
const router = express.Router();
const handler = require('../handler/simpleHandler');

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});


router.get('/simple', function (req, res){
    res.send('Hello!')
});

router.get('/hello', handler);

module.exports = router;