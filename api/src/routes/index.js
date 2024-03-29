const { Router } = require('express');
const router = Router();

const cars = require('./cars');
const locations = require('./locations');
const customers = require('./customers');
const cartypes = require('./cartypes');
const bookings = require('./bookings');
const payments=require('./payments')


router.use('/cars', cars);
router.use('/locations', locations);
router.use('/customers', customers);
router.use('/cartypes', cartypes);
router.use('/bookings', bookings);
router.use('/payment', payments);

module.exports = router;
