const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var donationFoodSchema = new Schema({
    type:       { type: String },
    quantity:   { type: Number , required: true },
    simbol:     { type: String, required: true, enum: ['Lb', 'Kg', 'Arr']},
    expires:    { type: Date }
}, { collection: 'donation-food'})

module.exports = mongoose.model('DonationFood', donationFoodSchema)