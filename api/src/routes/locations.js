const { Router } = require('express');
const router = Router();
const { validateCreateLocation } = require('../validators/validators');

const {
  getAllLocations,
  createLocation,
  getLocationById,
} = require('../controllers/locations');

router.get('/', getAllLocations);
router.get('/:id', getLocationById);

router.post('/',validateCreateLocation, createLocation);

module.exports = router;
