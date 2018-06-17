var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var medicineSchema = new Schema({
    type_name:          { 
        type: String, required: [ true, 'Campo obligatorio' ] 
    },
    type_presentation:  { 
        type: String, required: [ true, 'Campo obligatorio' ] 
    }
}, { collection: 'type-medicines'} );

module.exports = mongoose.model('Medicine', medicineSchema);

