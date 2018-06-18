var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var complaintSchema = new Schema({
    complaint_type:   { 
        type: String, 
        required: [true, 'Campo obligatorio']
    }    
}, { collection: 'type-complaints'} );

module.exports = mongoose.model('Complaint', complaintSchema);
