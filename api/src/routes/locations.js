const { Router } = require('express');
const router = Router();

const {
  getAllLocations,
  createLocation,
  getLocationById,
} = require('../controllers/locations');

router.get('/', getAllLocations);
router.get('/:id', getLocationById);

router.post('/', createLocation);

module.exports = router;
