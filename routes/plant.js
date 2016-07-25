var express = require('express');
var router = express.Router({mergeParams: true});

//var Plant = require('../model/Plant.js');

//router.get('/1', function(req, res, next) {
//    Plant.create({
//        name: 'plant',
//        location: 'table',
//        period: 3
//    }, function (err, data) {
//        if (err)
//            console.log(err);
//        else
//            console.log(data);
//    });
//});

router.route('/').get(function(req, res) {
    res.send('3');
});

router.route('/:plant').get(function(req, res) {
    res.send(3 + ' ' + req.params.greenery);
});



module.exports = router;



module.exports = router;