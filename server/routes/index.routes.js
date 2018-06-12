const router = require('express').Router();


// - api/breed
router.use('/breed', require('./master_detail/breed-route'));
router.use('/type-animal', require('./master_detail/animalType-route'));

module.exports = router;