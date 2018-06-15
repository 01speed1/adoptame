// rutas de Breed
const router = require('express').Router();
const VaccinationModel = require('../../models/master_detail/vaccination-model');


// ==================== Vacunas '/api/master/vaccinations/'
router.route('/')
    // ==================== GET - Ver todas Vacunas
    .get((req, res) => {
    
        VaccinationModel.find({})
            .exec( (err, vaccination) => {
               
                res.json({
                    Ok: true,
                    vaccination: vaccination
                })
            })  
    })

    // ==================== POST - Guardar Vacuna
    .post((req, res) => {

        var body = req.body; 
    
        if(Object.values(body).length === 0) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Ups! Vaccination don´t saved. Field Unknown. - POST Vaccination'
            });
            
        }
    
        var vaccination = new VaccinationModel({
            vaccination_code: body.code,
            vaccination_name: body.name
        })

        vaccination.save((err, vaccinationCreated)=>{
            if(err) {
                return res.status(400).json({
                    Ok:         false,
                    status:     200, 
                    mensaje:    'Wrong! Vaccination don´t saved. DB server - POST Vaccination ',  
                    errors:      err 
                }); 
            }
            
            res.status(200).json({
                Ok:             true,
                status:         200,
                mensaje:        'Congratulation! Vaccination created successfully - POST Vaccination !',
                vaccination:    vaccinationCreated
            }); 

        })

    })

// ==================== Vacunas '/api/master/vaccinations/:id'
router.route('/:id')
    // ==================== GET - Ver Vacuna
    .get((req, res) => {
        let id =  req.params.id

        VaccinationModel.findById(id, (err, vaccination) => {

            if (err) {
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Vaccination not found. DB server - GET Vaccination ',
                    error: err  
                }); 
            }
            
            res.status(200).json({
                Ok: true,
                status:200,
                mensaje: "Success! Vaccination found. - GET Vaccination",
                vaccination: vaccination
            })
               
        })
              
    })
    // ==================== PUT - Editar Vacuna
    .put((req, res)=>{
        let id =  req.params.id
        let body = req.body

        if(Object.values(body).length === 0) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Ups! Vaccination don´t saved. Field Unknown. - PUT Vaccination'
            });
            
        }
        
        VaccinationModel.findById(id, (err, vaccinationFound)=>{
            if (err){
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Vaccination not found. DB server - PUT Vaccination',
                    error: err  
                })
            }

            vaccinationFound.vaccination_code = body.code
            vaccinationFound.vaccination_name = body.name

            vaccinationFound.save((err, vaccinationUpdated) => {
                if (err){
                    return res.status(500).json({
                        OK:false,
                        status: 500,
                        mensaje:    'Wrong! Vaccination don´t saved. DB server - PUT Vaccination',
                        error: err  
                    })
                }

                res.status(200).json({
                    Ok:             true,
                    status:         200,
                    mensaje:        'Congratulation! Vaccination updated successfully - PUT Vaccination !',
                    vaccination:    vaccinationUpdated
                }); 

            })
            
    

        })
    })
    // ==================== DELETE - Borrar Vacuna
    .delete((req, res)=>{

        let id = req.params.id

        VaccinationModel.findByIdAndRemove(id, (err, vaccinationDeleted)=>{

            if (err) {
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Vaccination don´t deleted. DB server - DELETE Vaccination',
                    error: err  
                })
            }

            res.status(200).json({
                OK:true,
                status: 200,
                mensaje: "Success! Vaccionation deleted. - DELETE Vaccination.",
                vaccinationDeleted: vaccinationDeleted
            })
        
        })
    })



module.exports = router;