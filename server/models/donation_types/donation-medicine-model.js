const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const typeMedicine = require('../master_detail/types-medicines-model')

var donationMedicineSchema = new Schema({
    typeMedicine: { type: Schema.Types.ObjectId, ref: 'TypeMedicine', required: [true, 'Campo obligatorio ']},
    form:       { type: String, required: [true, 'Campo obligatorio '], enum: ['Topico', 'Inyectable', 'Sólido', 'Liquido'] },
    quantity:   { type: Number, required: [true, 'Campo obligatorio '] },
    especify:   {
            qsymbol:   { type: Number , required: true} ,
            symbol:    { type: String,  required: true, enum: ['mg', 'ml', 'gr', 'lt']}
        },
    lote:       { type: String, required: [true, 'Campo obligatorio '] },    
    expires:    { type: Date,   required: [true, 'Campo obligatorio ']},
    laboratory: { type: String, required: [true, 'Campo obligatorio '] }
    
}, { collection: 'donation-medicine'})

module.exports = mongoose.model('DonationMedicine', donationMedicineSchema)