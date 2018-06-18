var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var TypeAnimalModel = require('./animalType-model');

var breedSchema = new Schema({
    breed_name:   { 
        type: String, required: [true, 'Este campo es obligatorio ... ']
    },    
    typeAnimal:   { 
        type: Schema.Types.ObjectId, ref: 'TypeAnimal' 
    }
}, { collection: 'type-breeds'} );

module.exports = mongoose.model('Breed', breedSchema);
