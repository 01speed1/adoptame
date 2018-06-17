var router = require('express').Router();
const MedicineModel = require('../../models/master_detail/medicines-model');

// ==================== GET Types-Medicines ====================
router
    .get('/', (req, res) => {         
        res.json({ message: 'En types-medicines '})
})       


// ==================== POST Types-Medicines ====================
router
    .post('/', (req, res) => {
        var body = req.body;

        if(body.name != '' || body.presentation != '') {
            res.status(501).json({
                Ok:         false,
                status:     501,
                mensaje:    'Ups! Rh don´t saved. Field Unknown. - POST Rh'
            })
        }
    })


module.exports =  router;