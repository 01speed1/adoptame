var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var complaintSchema = new Schema({
    complaint_type:   { 
        type: String, 
        required: [true, 'complaint_type es obligatorio ... ']},
    
}, { collection: 'complaints'} );

module.exports = mongoose.model('complaint', complaintSchema);
