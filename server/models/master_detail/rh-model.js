var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var rh = new Schema({
    rh_name:   { 
        type:       String, 
        unique:     true,
        required:   [true, 'Campo obligatorio ... '],
        enum:       ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-']},
        
    
}, { collection: 'type-rh'} );

module.exports = mongoose.model('Rh', rh);
