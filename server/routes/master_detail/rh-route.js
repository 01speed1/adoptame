// rutas de Breed
const router = require('express').Router();
const RhModel = require('../../models/master_detail/rh-model');


// ==================== Tipos de RH '/api/master/rh/'
router.route('/')
    // ==================== GET - Ver todos los Tipos de Sangre
    .get((req, res) => {
    
        RhModel.find({})
            .exec( (err, rh) => {

                if(err) {
                    return res.status(500).json({
                        Ok:         false,
                        status:     500, 
                        mensaje:    'Wrong! Rh don´t found. DB server - Get Rh',  
                        errors:      err 
                    }); 
                }
               
                res.json({
                    Ok: true,
                    rh: rh
                })
            })  
    })
    // ==================== POST - Guardar Tipo de Sangre
    .post((req, res) => {

        var body = req.body; 
    
        if(Object.values(body).length === 0) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Ups! Rh don´t saved. Field Unknown. - POST Rh'
            });
            
        }
    
        var rh = new RhModel({
            rh_name: body.name   
        })

        rh.save((err, rhCreated)=>{
            if(err) {
                return res.status(500).json({
                    Ok:         false,
                    status:     500, 
                    mensaje:    'Wrong! Rh don´t saved. DB server - POST Rh',  
                    errors:      err 
                }); 
            }
            
            res.status(200).json({
                Ok:             true,
                status:         200,
                mensaje:        'Congratulation! Rh created successfully - POST Rh!',
                Rh:    rhCreated
            }); 

        })

    })

// ==================== Tipo de Sangre '/api/master/rh/:id'
router.route('/:id')
    // ==================== GET - Ver Tipo de Denuncia
    .get((req, res) => {
        let id =  req.params.id

        RhModel.findById(id, (err, rh) => {

            if (err) {
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Rh not found. DB server - GET Rh ',
                    error: err  
                }); 
            }

            if (rh == null) {
                return res.status(400).json({
                    OK:false,
                    status: 400,
                    mensaje:    'Wrong! Rh not found, id useless. - GET Rh ', 
                }); 
            }
            
            res.status(200).json({
                Ok: true,
                status:200,
                mensaje: "Success! Rh found. - GET Rh",
                Rh: rh
            })
               
        })
              
    })
    // ==================== PUT - Editar Tipo de Sangre
    .put((req, res)=>{
        let id =  req.params.id
        let body = req.body

        if(Object.values(body).length === 0) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Ups! Rh don´t saved. Field Unknown. - PUT Rh'
            });
            
        }
        
        RhModel.findById(id, (err, rhFound)=>{
            if (err){
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Rh not found. DB server - PUT Rh',
                    error: err  
                })
            }

            rhFound.rh_name = body.name

            rhFound.save((err, rhUpdated) => {
                if (err){
                    return res.status(500).json({
                        OK:false,
                        status: 500,
                        mensaje:    'Wrong! Rh don´t saved. DB server - PUT Rh',
                        error: err  
                    })
                }

                res.status(200).json({
                    Ok:         true,
                    status:     200,
                    mensaje:    'Congratulation! Rh updated successfully - PUT Rh !',
                    Rh:  rhUpdated
                }); 

            })
            
    

        })
    })
    // ==================== DELETE - Tipo de Sangre
    .delete((req, res)=>{

        let id = req.params.id

        RhModel.findByIdAndRemove(id, (err, rhDeleted)=>{

            if (err){
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Rh don´t deleted. DB server - DELETE Rh',
                    error: err  
                })
            }

            res.status(200).json({
                OK:true,
                status: 200,
                mensaje: "Success! Rh deleted. - DELETE Rh.",
                rh: rhDeleted
            })
        
        })
    })

module.exports = router;