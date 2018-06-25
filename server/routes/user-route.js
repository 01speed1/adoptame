// User Route
const router = require('express').Router();

const {

    getUsersAll,
    createUser,
    updateUser,
    deleteUser

} = require('../controllers/user-controller');

// GET User
router.get('/', getUsersAll);

// POST User
router.post('/', createUser);

// PUT User
router.put('/:userId', updateUser);

// DELETE User
router.delete('/:userId', deleteUser);

module.exports = router;