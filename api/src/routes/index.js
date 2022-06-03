const { Router } = require('express');
const router = Router();


const cars = require('./cars');
const locations = require('./locations');
const customers = require('./customers');
const cartypes = require('./cartypes');
const bookings = require('./bookings');


router.use('/cars', cars);
router.use('/locations', locations);
router.use('/customers/reviews', reviews);
router.use('/customers', customers);
router.use('/cartypes', cartypes);
router.use('/bookings', bookings);

module.exports = router;
