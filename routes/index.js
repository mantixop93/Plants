var express = require('express');
var userRouter = require('./user.js');

var router = express.Router();

router.use('/user', userRouter);

router.get('/', function(req, res) {
    res.send('index');
});

module.exports = router;
