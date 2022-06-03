const { Router } = require('express');
const router = Router();

const {
  createBookingDB,
  getBookings,
  getCustomersBookings,
} = require('../controllers/bookings');

router.get('/', getBookings);

router.get('/:id', getBookings);

router.post('/', createBookingDB);

router.get('/customer/:id', getCustomersBookings);

module.exports = router;
