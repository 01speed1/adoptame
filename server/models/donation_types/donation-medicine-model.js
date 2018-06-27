const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const typeMedicine = require('../master_detail/types-medicines-model')

var donationMedicineSchema = new Schema({
    typeMedicine: { type: Schema.Types.ObjectId, ref: 'TypeMedicine' },
    form:       { type: String, required: true, enum: ['Topico', 'Inyectable', 'Sólido', 'Liquido'] },
    quantity:   { type: Number, required: true },
    especify:   {
            qsymbol:   { type: Number } ,
            symbol:    { type: String, required: true, enum: ['mg', 'ml', 'gr', 'lt']}
        },
    lote:       { type: String, required: true },    
    expires:    { type: Date },
    laboratory: { type: String }
}, { collection: 'donation-medicine'})

module.exports = mongoose.model('DonationMedicine', donationMedicineSchema)