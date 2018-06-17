const router = require('express').Router();

router.use('/master/type-animal', require('./master_detail/animalType-route'));
router.use('/master/type-breed',       require('./master_detail/breed-route'));
router.use('/master/type-complaint',   require('./master_detail/complaint-route'));
router.use('/master/type-rh',          require('./master_detail/rh-route'));
router.use('/master/type-food',        require('./master_detail/food-route'));
router.use('/master/type-medicine',   require('./master_detail/medicine-route'));

// Por excluir
// router.use('/master/type-vaccination', require('./master_detail/vaccination-route'));
module.exports = router;