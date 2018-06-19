const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const typeMedicineSchema = new Schema({
    name:         { type: String, required: [true, 'Campo Obligatorio']},
    presentation: { type: String, required: [true, 'Campo Obligatorio'], enum: ['Unidad', 'Caja', 'Sobre', 'Frasco', 'Tableta'] }
},{ collection: 'type-medicine'})

module.exports = mongoose.model('TypeMedicine', typeMedicineSchema);

