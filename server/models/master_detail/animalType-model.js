var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var typeSchema = new Schema({
    type_animal:  { 
        type: String, required: [true, 'Este campo es obligatorio ... ']
    }
}, { collection: 'type-animals'} );

module.exports = mongoose.model('TypeAnimal', typeSchema);
