const { Router } = require('express');
const router = Router();

const cars = require('./cars/cars.js');
const locations = require('./location/location.js');
const customers= require('./customer/customer.js')


router.use('/cars', cars);
router.use('/locations', locations);
router.use('/customers', customers);


module.exports = router;
