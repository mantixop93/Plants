/**
 * Created by Mantixop on 7/23/16.
 */
var mongoose = require('mongoose');

var GreenerySchema = new mongoose.Schema({
    user: String,
    greeneries: [{
        name: String,
        plants: [{
            name: String,
            location: String,
            period: Number,
            history: [Date]
        }]
    }]
})



module.exports = mongoose.model('greeneries', GreenerySchema);