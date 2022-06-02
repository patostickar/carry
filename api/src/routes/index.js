const { Router } = require('express');
const router = Router();

const cars = require('./cars/cars.js');
const locations = require('./location/location.js');
const customers= require('./customer/customer.js')
const cartype = require("./cartype/cartype.js")
const bookings = require("./booking/booking.js")

router.use('/cars', cars);
router.use('/locations', locations);
router.use('/customers', customers);
router.use('/cartype', cartype);
router.use('/bookings', bookings);


module.exports = router;
