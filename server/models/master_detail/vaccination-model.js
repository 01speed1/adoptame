/*
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
// var TypeAnimalModel = require('./animalType-model');

var vaccinationSchema = new Schema({
    vaccination_code:   { 
        type: String, 
        required: [true, 'vaccination_code es obligatorio ... ']
    },
    vaccination_name:   { 
        type: String, 
        required: [true, 'vaccination_name es obligatorio ... ']
    },
}, { collection: 'vaccinations'} );

module.exports = mongoose.model('vaccination', vaccinationSchema);

*/