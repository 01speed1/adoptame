// rutas de Breed
const router = require('express').Router();
const ComplaintModel = require('../../models/master_detail/complaint-model');


// ==================== Tipos de Denuncias '/api/master/complaint/'
router.route('/')
    // ==================== GET - Ver todos los Tipos de Denuncias
    .get((req, res) => {
    
        ComplaintModel.find({})
            .exec( (err, complaints) => {
               
                res.json({
                    Ok: true,
                    complaints: complaints
                })
            })  
    })
    // ==================== POST - Guardar Tipo de Denuncia
    .post((req, res) => {

        var body = req.body; 
    
        if(Object.values(body).length === 0) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Ups! Complaint don´t saved. Field Unknown. - POST Complaint'
            });
            
        }
    
        var complaint = new ComplaintModel({
            complaint_type: body.type   
        })

        complaint.save((err, complaintCreated)=>{
            if(err) {
                return res.status(400).json({
                    Ok:         false,
                    status:     200, 
                    mensaje:    'Wrong! Complaint don´t saved. DB server - POST Complaint',  
                    errors:      err 
                }); 
            }
            
            res.status(200).json({
                Ok:             true,
                status:         200,
                mensaje:        'Congratulation! Complaint created successfully - POST Complaint!',
                complaint:    complaintCreated
            }); 

        })

    })

// ==================== Vacunas '/api/master/complaint/:id'
router.route('/:id')
    // ==================== GET - Ver Tipo de Denuncia
    .get((req, res) => {
        let id =  req.params.id

        ComplaintModel.findById(id, (err, complaint) => {

            if (err) {
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! complaint not found. DB server - GET complaint ',
                    error: err  
                }); 
            }
            
            res.status(200).json({
                Ok: true,
                status:200,
                mensaje: "Success! complaint found. - GET complaint",
                complaint: complaint
            })
               
        })
              
    })
    // ==================== PUT - Editar Tipo de Denuncia
    .put((req, res)=>{
        let id =  req.params.id
        let body = req.body

        if(Object.values(body).length === 0) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Ups! Complaint don´t saved. Field Unknown. - PUT Complaint'
            });
            
        }
        
        ComplaintModel.findById(id, (err, complaintFound)=>{
            if (err){
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Complaint not found. DB server - PUT Complaint',
                    error: err  
                })
            }

            complaintFound.complaint_type = body.type

            complaintFound.save((err, complaintUpdated) => {
                if (err){
                    return res.status(500).json({
                        OK:false,
                        status: 500,
                        mensaje:    'Wrong! Complaint don´t saved. DB server - PUT Complaint',
                        error: err  
                    })
                }

                res.status(200).json({
                    Ok:         true,
                    status:     200,
                    mensaje:    'Congratulation! Complait updated successfully - PUT Complaint !',
                    complaint:  complaintUpdated
                }); 

            })
            
    

        })
    })
    // ==================== DELETE - Tipo de denuncia
    .delete((req, res)=>{

        let id = req.params.id

        ComplaintModel.findByIdAndRemove(id, (err, complaintDeleted)=>{

            if (err){
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Complaint don´t deleted. DB server - DELETE Complaint',
                    error: err  
                })
            }

            res.status(200).json({
                OK:true,
                status: 200,
                mensaje: "Success! Complaint deleted. - DELETE Complaint.",
                complaint: complaintDeleted
            })
        
        })
    })



module.exports = router;