const { Router } = require('express');
const router = Router();

const {
  createBooking,
  getBookings,
  getCustomersBookings,
} = require('../controllers/bookings');

router.get('/', getBookings);
router.get('/:id', getBookings);
router.get('/customer/:id', getCustomersBookings);
router.post('/', createBooking);

module.exports = router;
