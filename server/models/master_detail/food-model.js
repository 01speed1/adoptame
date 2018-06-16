var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var foodSchema = new Schema({
    food_name:   { 
        type: String, 
        unique:true,
        required: [true, 'food_name es obligatorio ... ']},
        
}, { collection: 'food'} );

module.exports = mongoose.model('food', foodSchema);
