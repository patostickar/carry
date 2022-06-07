const { Router } = require('express');
const {
  getType,
  getTypeCount,
  createCartype,
} = require('../controllers/cartypes');
const router = Router();

router.get('/', getType);
router.get('/:id', getType);
router.get('/count/:locationId', getTypeCount);

router.post('/', createCartype);

router.put('/:id');
router.patch('/:id');

module.exports = router;
