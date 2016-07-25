/**
 * Created by Mantixop on 7/23/16.
 */
var mongoose = require('mongoose');

var GreenerySchema = new mongoose.Schema({
        user: String,
        name: String,
        plants: [{
            name: String,
            period: Number,
            history: [Date]
        }]
})



module.exports = mongoose.model('greeneries', GreenerySchema);