const router = require('express').Router();


// - api/
router.use('/master/type-animal', require('./master_detail/animalType-route'));
router.use('/master/breed', require('./master_detail/breed-route'));
router.use('/master/vaccination', require('./master_detail/vaccination-route'));


module.exports = router;