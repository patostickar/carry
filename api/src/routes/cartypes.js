const { Router } = require('express');
const {
  getType,
  GetTypeConunt,
  createCartype,
} = require('../controllers/cartypes');
const router = Router();

router.get('/', getType);
router.get('/count/:locationId', GetTypeConunt);
router.get('/:id', getType);
router.post('/', createCartype);

router.put('/:id');
router.patch('/:id');

module.exports = router;
