const { Router } = require('express');
const router = Router();

const {
  getAllCars,
  getAvailableCars,
  createCar,
  getCarById,
  updateLocation,
} = require('../controllers/cars');

router.get('/', getAllCars);
router.get('/SearchResults', getAvailableCars);
router.get('/:id', getCarById);
router.post('/', createCar);
// router.put("/:id", updateCarDate)
router.patch('/:id', updateLocation);

module.exports = router;
