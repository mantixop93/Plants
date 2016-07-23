/**
 * Created by Mantixop on 7/23/16.
 */
var mongoose = require('mongoose');

var GreenerySchema = new mongoose.Schema({
    user: String,
    greenaries: [{
        name: String,
        plants: [{
            name: String,
            location: String,
            period: Number,
            history: [Date]
        }]
    }]
})

//var PlantSchema = new mongoose.Schema({
//    name: String,
//    location: String,
//    period: Number,
//    history: []
//});

module.exports = mongoose.model('greenaries', GreenerySchema);