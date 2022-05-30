
const { Router } = require('express');
const { getType, GetTypeConunt } = require('../../controllers/cartype');
const router = Router();

router.get('/', getType);
router.get('/count/:locationId',GetTypeConunt);
router.get('/:id', getType);


router.put('/:id');
router.patch('/:id');

module.exports = router;
