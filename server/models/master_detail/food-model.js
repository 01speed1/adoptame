var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var foodSchema = new Schema({
    food_name:   { 
        type:       String, 
        unique:     true,
        required:   [true, 'Food es obligatorio. ']
    }        
}, { collection: 'type-foods'} );

module.exports = mongoose.model('Food', foodSchema);
