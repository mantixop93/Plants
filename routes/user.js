var express = require('express');
var router = express.Router({mergeParams: true});
var greeneryRouter = require('./greenery.js');

router.route('/').get(function(req, res) {
    res.send('1');
});

router.route('/:user').get(function(req, res) {
    res.send(1 + '  ' + req.params.user);
});

router.use('/:user/greenery', greeneryRouter);

module.exports = router;
