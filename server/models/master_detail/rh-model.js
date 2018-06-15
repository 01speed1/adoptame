var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var rh = new Schema({
    rh_name:   { 
        type: String, 
        unique:true,
        required: [true, 'rh_name es obligatorio ... '],
        enum:['O+', 'O-', 'A+', 'A-', 'AB+', 'AB-', 'B+', 'B-']},
        
    
}, { collection: 'rh'} );

module.exports = mongoose.model('rh', rh);
