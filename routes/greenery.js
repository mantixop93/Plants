var express = require('express');
var router = express.Router({mergeParams: true});
var plantRouter = require('./plant.js');

var Greenery = require('../model/Greenery.js');

router.route('/').get(function (req, res) {
    Greenery.find({user: req.params.user}, function (err, data) {
        res.json(data);
    })
});

router.route('/').post(function (req, res) {
    Greenery.create(req.body, function (err, data) {
        res.json(data);
    });
});


router.route('/:greeneryId').get(function (req, res) {
    Greenery.findOne({user: req.params.user, _id: req.params.greeneryId}, function (err, data) {
        res.json(data);
    });
});

router.route('/:greeneryId').delete(function (req, res) {
    Greenery.remove({user: req.params.user, _id: req.params.greeneryId}, function (err, data) {
        res.json(data);
    });
});

router.use('/:greeneryId/plant', plantRouter);

module.exports = router;
