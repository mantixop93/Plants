var express = require('express');
var router = express.Router({mergeParams: true});

var Greenery = require('../model/Greenery.js');


router.route('/').post(function(req, res) {
    Greenery.findOne({user: req.params.user, _id: req.params.greeneryId}, function(err, data) {
        for (var i = 0; i < data.plants.length; i++) {
            if (data.plants[i]._id == req.params.plantId) {
                data.plants[i].history.push(req.body.date);
            }
        }
        data.save();
        res.json(req.body.date);
    })
});

module.exports = router;