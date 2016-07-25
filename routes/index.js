var express = require('express');
var router = express.Router();
var greeneryRouter = require('./greenery.js');
var Greenery = require('../model/Greenery.js');

router.use('/user/:user/greenery', greeneryRouter);

module.exports = router;
