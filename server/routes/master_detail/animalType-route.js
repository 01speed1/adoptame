// animalType Routes

const router = require('express').Router();
const animalTypeModel = require('../../models/master_detail/animalType-model');


// ======================= Guardar Tipo Animal ========================== 

router.get('/',  (req, res)=> {

    (async () => {
        let types =  await animalTypeModel.find()
        res.status(200).json({
            Ok:       true,
            status:   200, 
            message:  "Solicitud exitosa! - AnimalTypes",
            types:    types
        })
    })

    ().catch( err => res.status(500).json({
        Ok:        false,
        status:    500,
        message:   "Ups!, Solicitud Denegada. Intentelo de Nuevo - GET AnimalTypes",
        err:       err
    }))
    
});



// ======================= Guardar Tipo Animal ========================== 

router.post('/', (req, res) => {
    var body = req.body;
    
    ( async () => {

        let animal = new animalTypeModel({
            type_animal : body.title
        });

        await animal.save()

        res.json({OK:true, msn :"Animal save" })

      /*  var data = await ( !body.title ? 
                                    animalTypeModel.save(body) : console.log('Escriba algo'))
                        .then( res => {
                            return json({
                                Ok: true
                            })
                        })*/


        /*{
            res.status(400).json({
                error: 'Bad Data'
            })
        } else {
            animalTypeModel.save(body, (err, task) => {
                if(err) return next(err);
                res.json(task);
            })
        }*/

    })

    ().catch( err => res.status(500).json({
        Ok:        false,
        status:    500,
        message:   "Ups!, Solicitud Denegada. Intentelo de Nuevo - POST AnimalTypes",
        err
        
    }))

    
})







module.exports = router;