// TypeAnimal Routes
const router = require('express').Router();

const {
    
    getTypesAnimal,
    createTypeAnimal,
    updateTypeAnimal

} = require('../../controllers/master-detail/types-controller')

// GET TypeAnimal
router.get('/type', getTypesAnimal);
// POST TypeAnimal
router.post('/type', createTypeAnimal);
// PUT TypeAnimal
router.put('/type/:typeId', updateTypeAnimal);


module.exports = router;





/*
// ======================= Obtener Tipo Animal ========================== 

router.get('/',  (req, res)=> {

    let types = animalTypeModel.find({}, (err, types) => {
        
        if(err) {
            return res.status(500).json({
                Ok:       true,
                status:   500, 
                message:  'Wrong! Type don´t saved. Error server - GET TypeAnimal ',  
                error:    err
            })                
        }

            res.status(200).json({
                Ok:       true,
                status:   200, 
                message:  'Congratulation! Types successfully - GET TypeAnimal !',
                types:    types
            })
    })        
    
});



// ======================= Guardar Tipo Animal ========================== 

router.post('/', (req, res) => {
    var body = req.body;

    var type = new animalTypeModel({
        type_animal: body.title
    });

    if(!body.title || body.title.length === 0) {
        return res.status(500).json({
            Ok:         false,
            status:     500, 
            mensaje:    'Wrong! Type don´t saved. Field Unknown - POST TypeAnimal '            
        }); 
    }

    type.save( (err, typeSaved) => {
        if(err) {
            return res.status(400).json({
                Ok:         false,
                status:     200, 
                mensaje:    'Wrong! Type don´t saved. Error server - POST TypeAnimal ',  
                errors:      err 
            }); 
        }   

        res.status(200).json({
            Ok:         true,
            status:     200,
            mensaje:    'Congratulation! Type created successfully - POST TypeAnimal !',
            types:      typeSaved
        }); 
    })
})















// ======================= Actualizar Tipo Animal ========================== 
router.put('/:id', (req, res) => {

    var id = req.params.id;
    var body = req.body;

    if(!body.title || body.title.length === 0) {
        return res.status(500).json({
            Ok:         false,
            status:     500, 
            mensaje:    'Ups! Type don´t update. Field Unknown. - PUT AnimalTYpe'      
        }); 
    }

    animalTypeModel.findById(id, (err, type) => {
        if(err) {
            return res.status(400).json({
                Ok:         false,
                status:     400, 
                mensaje:    'Wrong!- ID don´t found. - PUT AnimalType',
                mongo_er:   err      
            });
        }

        type.type_animal = body.title;
        type.save( (err, typeUpdate) => {
            if(err) {
                return res.status(501).json({
                    Ok:         false,
                    status:     501, 
                    mensaje:    'Wrong! Type don´t update, error server. - PUT AnimalTYpe',
                    mongo_er:   err      
                });
            }

            res.status(200).json({
                Ok:         true,
                status:     200,
                mensaje:    'Congratulation! Type update successfully - PUT TypeAnimal !',
                types:      typeUpdate
            })
        })
    })
})


// ======================= Eliminar Tipo Animal ========================== 

router.delete('/:id', (req, res) => {
    var id = req.params.id;

    animalTypeModel.findByIdAndRemove(id, (err, type) => {
        if(err) {
            return res.status(400).json({
                Ok:         false,
                status:     400, 
                mensaje:    'Wrong!- Animal don´t delete. - DELETE AnimalType',
                mongo_er:   err      
            });
        }

        if(!type) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Wrong!- ID don´t exists. - DELETE AnimalType',
                mongo_er:   err      
            });
        }

        res.status(200).json({
                Ok:         true,
                status:     200, 
                mensaje:    'Congratulations! Type deleted successfully. - DELETE AnimalType',
                type:       type
        })
    })
})


module.exports = router;
*/