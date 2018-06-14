const router = require('express').Router();


// - api/breed
router.use('/master/type-animal', require('./master_detail/animalType-route'));
router.use('/master/breed', require('./master_detail/breed-route'));

module.exports = router;