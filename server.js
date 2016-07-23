var express = require('express');
var mongoose = require('mongoose');
//
var routes = require('./routes/index');
//var plants = require('./routes/plants');

mongoose.connect('mongodb://localhost/greenery', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var app = express();

app.use('/',routes);
//app.use('/plants', plants);

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

module.exports = app;

