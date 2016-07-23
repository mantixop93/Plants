var express = require('express');
var router = express.Router({mergeParams: true});
var greeneryRouter = require('./greenery.js');

var Greenery = require('../model/Greenery.js');

router.route('/').get(function (req, res) {
    Greenery.find(function (err, data) {
        res.json(data);
    });
});

router.route('/').post(function (req, res) {
    Greenery.create(req.body, function (err, data) {
        res.json(data);
    });
});

router.route('/:user').get(function (req, res) {
    Greenery.findOne({user: req.params.user})
        .exec(function (err, users) {
            res.send(users);
        });
});

router.use('/:user/greenery', greeneryRouter);

module.exports = router;
