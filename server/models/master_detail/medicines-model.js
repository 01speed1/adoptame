var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var medicineSchema = new Schema({
    medicine_code: { type: String, required: [true, 'Este campo es obligatorio. '] , unique: true},
    medicine_name: { type: String, required: [true, 'Este campo es obligatorio. ']},
    medicine_presentation: { type: String }, 
    medicine_description:  { 
                        ml: { type: String, lowercase: true },
                        mg: { type: String, lowercase: true }
                    },
    medicine_laboratory: { type: String },
    medicine_createdAt:  { type: Date, default: Date.now }
}, { collection: 'medicines'} );

module.exports = mongoose.model('medicine', medicineSchema);

