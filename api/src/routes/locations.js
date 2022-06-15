const { Router } = require('express');
const router = Router();
const { validateCreateLocation } = require('../validators/validators');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const {
  getAllLocations,
  createLocation,
  getLocationById,
} = require('../controllers/locations');

router.get('/', getAllLocations);
router.get('/:id', getLocationById);

router.post('/', [auth, admin, validateCreateLocation], createLocation);

module.exports = router;
