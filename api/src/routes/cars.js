const { Router } = require('express');
const router = Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const {
  getAllCars,
  getAvailableCars,
  addCar,
  getCarById,
} = require('../controllers/cars');

router.get('/', [auth, admin], getAllCars);
router.get('/SearchResults', getAvailableCars);
router.get('/:id', auth, getCarById);

router.post('/', [auth, admin], addCar);

// router.put("/:id", updateCarDate)
// router.patch('/:id', updateLocation);

module.exports = router;
