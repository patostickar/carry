const { Router } = require('express');
const router = Router();
const { validateCreateCarType } = require('../validators/validators');
const {
  getCarType,
  getCarTypeCount,
  createCartype,
} = require('../controllers/cartypes');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', getCarType);
router.get('/:id', getCarType);
router.get('/count/:locationId', [auth, admin], getCarTypeCount);

router.post('/', [auth, admin, validateCreateCarType], createCartype);

// router.put('/:id');
// router.patch('/:id');

module.exports = router;
