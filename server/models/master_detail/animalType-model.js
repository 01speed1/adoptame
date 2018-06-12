var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var typeAnimal = new Schema({
    type_animal:  { type: String, required: [true, 'Este campo es obligatorio ... ']},    
}, { collection: 'typeAnimal'} );

module.exports = mongoose.model('typeAnimal', typeAnimal);
