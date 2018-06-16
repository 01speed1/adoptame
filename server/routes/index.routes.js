const router = require('express').Router();


//       api/
router.use('/master/type-animal', require('./master_detail/animalType-route'));
router.use('/master/breed',       require('./master_detail/breed-route'));
router.use('/master/vaccination', require('./master_detail/vaccination-route'));
router.use('/master/complaint', require('./master_detail/complaint-route'));
router.use('/master/rh', require('./master_detail/rh-route'));
router.use('/master/food', require('./master_detail/food-route'));
router.use('/master/medicines',   require('./master_detail/medicine-route'));

module.exports = router;