var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var TypeAnimalModel = require('./animalType-model');

var breedModel = new Schema({
    breed_name:   { type: String, required: [true, 'Este campo es obligatorio ... ']},    
    typeAnimal:   { type: Schema.Types.ObjectId, ref: 'TypeAnimalModel' }   // Relationship
}, { collection: 'breedModel'} );

module.exports = mongoose.model('breed', breedModel);
