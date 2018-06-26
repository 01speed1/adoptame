const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

var donationBloodSchema = new Schema({
    type:       { type: String },
    rh_id:      { type: Schema.Types.ObjectId, ref: 'Rh' },
    quantity:   { type: Number , required: true },
    simbol:     { type: String, required: true, enum: ['Lt', 'ml']}
}, { collection: 'donation-blood'})

module.exports = mongoose.model('DonationBlood', donationBloodSchema)