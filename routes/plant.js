var express = require('express');
var router = express.Router({mergeParams: true});
var historyRouter = require('./history.js')

var Greenery = require('../model/Greenery.js');

router.route('/:plantId').get(function(req, res) {
    Greenery.aggregate([
        { $match: { user: req.params.user, _id: req.params.greeneryId }},
        { $unwind: "$plants" },
        { $match: { "plants._id" : req.params.plantId }}
    ], function (err, result) {
        res.json(result[0]);
    });
});

router.route('/').post(function(req, res) {
    Greenery.findOne({user: req.params.user, _id: req.params.greeneryId}, function(err, data) {
        data.plants.push(req.body);
        data.save();
        res.json(data);
    })
});

router.route('/:plantId').delete(function(req, res) {
    Greenery.findOne({user: req.params.user, _id: req.params.greeneryId}, function(err, data){
        for (var i = 0; i < data.plants.length; i++) {
            if (data.plants[i]._id == req.params.plantId) {
                data.plants.splice(i, 1);
                break;
            }
        }
        data.save();
        res.json(data);
    })
});

router.use('/:plantId/history', historyRouter);

module.exports = router;