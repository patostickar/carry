const { Router } = require('express');
const router = Router();

const {
  createCar,
  getCarById,
  updateLocation,
} = require('../controllers/cars');

// router.get('/', getCars);
router.get('/:id', getCarById);
router.post('/', createCar);
// router.put("/:id", updateCarDate)
router.patch('/:id', updateLocation);

module.exports = router;
