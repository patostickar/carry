const { Router } = require('express');
const { getType } = require('../../controllers/cartype');
const router = Router();
const { Cartype, Car } = require('../../db.js');

router.get('/', getType);
router.get('/count/:locationId', async (req, res, next) => {
  const { locationId } = req.params;
  const count = await Car.count({
    attributes: ['cartypeId'],
    where: { locationId },
    group: 'cartypeId',
  });

  res.send(count);
});
router.get('/:id', getType);

router.put('/:id');
router.patch('/:id');

module.exports = router;
