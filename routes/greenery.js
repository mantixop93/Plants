var express = require('express');
var router = express.Router({mergeParams: true});
var plantRouter = require('./plant.js')

router.route('/').get(function(req, res) {
    res.send('2');
});

router.route('/:greenery').get(function(req, res) {
    res.send(2 + ' ' + req.params.greenery);
});

router.use('/:greenery/plant', plantRouter);

module.exports = router;
