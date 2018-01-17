const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');


// router.post('/', (req, res, next) => {
//     return userController.test(req, res, next);
// });

router.get('/', authMiddleware, adminMiddleware, userController.get_all_users);
router.get('/:id', userController.get_single_user);
router.put('/:id', authMiddleware, userController.update_single_user);
router.delete('/:id', authMiddleware, userController.delete_single_user);

module.exports = router;