var router = require('express').Router();
const MedicineModel = require('../../models/master_detail/medicines-model');

router.get('/', (req, res) => {

    MedicineModel.find({}, (err, medicine) => {
        
        res.json({
            Ok:     true,
            status: 200,
            message: 'Congratulations!, Medicine List. GET - Medicines',
            medicine: medicine
        })
    
    })
})          


module.exports =  router;