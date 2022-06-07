const { Router } = require('express');
const router = Router();

const {
  getAllCars,
  getAvailableCars,
  createCar,
  getCarById,
} = require('../controllers/cars');

router.get('/', getAllCars);
router.get('/:id', getCarById);
router.get('/SearchResults', getAvailableCars);

router.post('/', createCar);

// router.put("/:id", updateCarDate)
// router.patch('/:id', updateLocation);

module.exports = router;
