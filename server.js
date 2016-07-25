var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var routes = require('./routes/index');

mongoose.connect('mongodb://localhost/greenery', function(err) {
    if(err) {
        console.log('connection error', err);
    } else {
        console.log('connection successful');
    }
});

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api',routes);
app.use(express.static(__dirname + '/client'));

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

module.exports = app;

