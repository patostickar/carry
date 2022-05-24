const { Router } = require('express');
const router = Router();

const cars = require('./cars/cars.js');

router.use('/cars', cars);

module.exports = router;
