// rutas de Breed
const router = require('express').Router();
const BreedModel = require('../../models/master_detail/breed-model');
const AnimalTypeModel = require('../../models/master_detail/animalType-model');

router.get('/', (req, res) => {
    
    BreedModel.find({})
        .populate('typeAnimal')
        .exec( (err, breed) => {
           
            res.json({
                Ok: true,
                breed: breed
            })
        })  
})          


// ==================== POST - Guardar Raza con TypeAnimal

router.post('/', (req, res) => {

    var body = req.body;  
    var animal = req.body.animal;  

    if(!body.name || !animal ) {
        return res.status(500).json({
            Ok:         false,
            status:     500, 
            mensaje:    'Ups! Breed don´t saved. Field Unknown. - POST Breed'
        }); 
    }

    var breed = new BreedModel({
        breed_name: body.name,
        typeAnimal: animal
    })

    AnimalTypeModel.find({animal}, (err, animalExist) => {

        if(err) {
            return res.status(500).json({
                Ok:         false,
                status:     500,
                message:    "Ups! Database error. POST - Breed",
                error:      err
            })            
        }

        if(!animal) {
            return res.status(500).json({
                Ok:         false,
                status:     500,
                message:    "Ups! ID AnimalType unknown . POST - Breed",
                error:      err
            })            
        }

        breed.save( (err, breedSaved) => {
            
            if(err) {
                return res.status(400).json({
                    Ok:         false,
                    status:     200, 
                    mensaje:    'Wrong! Breed don´t saved. Error server - POST Breed ',  
                    errors:      err 
                }); 
            }
            
            BreedModel
            .findById(breedSaved._id)
            .populate('typeAnimal').exec((err, anim)=>{

                if(err) {
                    return res.status(400).json({
                        Ok:         false,
                        status:     200, 
                        mensaje:    'Wrong! Breed don´t saved. Error server - POST Breed ',  
                        errors:      err 
                    }); 
                }


                res.status(200).json({
                    Ok:         true,
                    status:     200,
                    mensaje:    'Congratulation! Breed created successfully - POST Breed !',
                    breed:      anim
                }); 

            })

            

            
        })
    })
})








module.exports = router;