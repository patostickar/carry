const { Router } = require('express');
const router = Router();

const cars = require('./cars/cars.js');
const locations = require('./location/location.js');

router.use('/cars', cars);
router.use('/locations', locations);
router.use('/locations/:id', locations);

module.exports = router;
