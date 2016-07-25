var express = require('express');
var userRouter = require('./user.js');

var router = express.Router();

router.get('/', function(req, res) {
    res.send('index');
});

router.use('/user', userRouter);

module.exports = router;
