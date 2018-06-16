// rutas de Breed
const router = require('express').Router();
const FoodModel = require('../../models/master_detail/food-model');


// ==================== Compida '/api/master/food/'
router.route('/')
    // ==================== GET - Ver todos las Comidas
    .get((req, res) => {
    
        FoodModel.find({})
            .exec( (err, food) => {

                if(err) {
                    return res.status(500).json({
                        Ok:         false,
                        status:     500, 
                        mensaje:    'Wrong! Food don´t found. DB server - Get Food',  
                        errors:      err 
                    }); 
                }
               
                res.json({
                    Ok: true,
                    food: food
                })
            })  
    })
    // ==================== POST - Guardar Comida
    .post((req, res) => {

        var body = req.body; 
    
        if(Object.values(body).length === 0) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Ups! Food don´t saved. Field Unknown. - POST Food'
            });
            
        }
    
        var food = new FoodModel({
            food_name: body.name   
        })

        food.save((err, foodCreated)=>{

            if(err) {
                return res.status(500).json({
                    Ok:         false,
                    status:     500, 
                    mensaje:    'Wrong! Food don´t saved. DB server - POST Food',  
                    errors:      err 
                }); 
            }
            
            res.status(200).json({
                Ok:             true,
                status:         200,
                mensaje:        'Congratulation! Food created successfully - POST Food!',
                Food:    foodCreated
            }); 

        })

    })

// ==================== Comida '/api/master/food/:id'
router.route('/:id')
    // ==================== GET - Ver Comida
    .get((req, res) => {
        let id =  req.params.id

        FoodModel.findById(id, (err, foodFound) => {

            if (err) {
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Food not found. DB server - GET Food ',
                    error: err  
                }); 
            }

            if (foodFound == null) {
                return res.status(400).json({
                    OK:false,
                    status: 400,
                    mensaje:    'Wrong! Food not found, id useless. - GET Food ', 
                }); 
            }
            
            res.status(200).json({
                Ok: true,
                status:200,
                mensaje: "Success! Food found. - GET Food",
                Food: foodFound
            })
               
        })
              
    })
    // ==================== PUT - Editar Comida
    .put((req, res)=>{
        let id =  req.params.id
        let body = req.body

        if(Object.values(body).length === 0) {
            return res.status(500).json({
                Ok:         false,
                status:     500, 
                mensaje:    'Ups! Food don´t saved. Field Unknown. - PUT Food'
            });
            
        }
        
        FoodModel.findById(id, (err, foodFound)=>{
            if (err){
                return res.status(500).json({
                    OK:         false,
                    status:     500,
                    mensaje:    'Wrong! Food not found. DB server - PUT Food',
                    error: err  
                })
            }

            foodFound.food_name = body.name

            foodFound.save((err, foodUpdated) => {
                if (err){
                    return res.status(500).json({
                        OK:false,
                        status: 500,
                        mensaje:    'Wrong! Food don´t saved. DB server - PUT Food',
                        error: err  
                    })
                }

                res.status(200).json({
                    Ok:         true,
                    status:     200,
                    mensaje:    'Congratulation! Food updated successfully - PUT Food !',
                    Food:  foodUpdated
                }); 

            })
            
    

        })
    })
    // ==================== DELETE - Tipo de Sangre
    .delete((req, res)=>{

        let id = req.params.id

        FoodModel.findByIdAndRemove(id, (err, foodDeleted)=>{

            if (err){
                return res.status(500).json({
                    OK:false,
                    status: 500,
                    mensaje:    'Wrong! Food don´t deleted. DB server - DELETE Food',
                    error: err  
                })
            }

            res.status(200).json({
                OK:true,
                status: 200,
                mensaje: "Success! Food deleted. - DELETE Food.",
                rh: foodDeleted
            })
        
        })
    })

module.exports = router;