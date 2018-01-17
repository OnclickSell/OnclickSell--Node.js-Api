const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/listingsController');
const authMiddleware = require('../middlewares/authMiddleware')


// router.post('/', (req, res, next) => {
//     return listingsController.test(req, res, next);
// });

router.get('/', listingsController.get_all_listings);
router.get('/:id', listingsController.get_single_listings);
router.post('/', authMiddleware, listingsController.create_single_listings);
router.put('/:id', authMiddleware, listingsController.update_single_listings);
router.delete('/:id', authMiddleware, listingsController.delete_single_listings);

module.exports = router;