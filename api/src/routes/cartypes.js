const { Router } = require('express');
const {
  getCarType,
  getCarTypeCount,
  createCartype,
} = require('../controllers/cartypes');
const router = Router();

router.get('/', getCarType);
router.get('/:id', getCarType);
router.get('/count/:locationId', getCarTypeCount);

router.post('/', createCartype);

router.put('/:id');
router.patch('/:id');

module.exports = router;
