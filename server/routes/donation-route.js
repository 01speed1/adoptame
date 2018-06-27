const router = require('express').Router()


const { 

    createDonation

} = require('../controllers/donation-controller')

// POST
router.post('/', createDonation);


module.exports = router;