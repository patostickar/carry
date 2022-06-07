const { Router } = require('express');
const router = Router();

const {
  getAllCars,
  getAvailableCars,
  addCar,
  getCarById,
} = require('../controllers/cars');

router.get('/', getAllCars);
router.get('/SearchResults', getAvailableCars);
router.get('/:id', getCarById);

router.post('/', addCar);

// router.put("/:id", updateCarDate)
// router.patch('/:id', updateLocation);

module.exports = router;
