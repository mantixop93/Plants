var express = require('express');
var router = express.Router({mergeParams: true});
var plantRouter = require('./plant.js')

var Greenery = require('../model/Greenery.js');

router.route('/').get(function (req, res) {
    Greenery.findOne({user: req.params.user}, function (err, data) {
        res.json(data.greeneries);
    })
});

router.route('/').post(function (req, res) {
    Greenery.findOne({user: req.params.user}, function (err, data) {
        data.greeneries.push(req.body);
        data.save();
        res.json(data);
    });
});

router.route('/:greenery').get(function (req, res) {
    Greenery.aggregate([
        { $match: { user: req.params.user }},
        { $unwind: "$greeneries" },
        { $match: { "greeneries.name" : req.params.greenery }}
    ], function (err, result) {
        res.json(result[0].greeneries);
    });
});

router.use('/:greenery/plant', plantRouter);

module.exports = router;
