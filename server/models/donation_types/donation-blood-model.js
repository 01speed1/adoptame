const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var donationBloodSchema = new Schema({
    type:       { type: String },
    rh_id:      { type: String },
    quantity:   { type: Number , required: true },
    simbol:     { type: String, required: true, enum: ['Lt', 'ml']}
}, { collection: 'donation-blood'})

module.exports = mongoose.model('DonationBlood', donationBloodSchema)