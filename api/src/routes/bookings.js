const { Router } = require('express');
const router = Router();

const {
  dbcreateBooking,
  getAllBookings,
  getCustomersBookings,
} = require('../controllers/bookings');

router.get('/', getAllBookings);
router.get('/customer/:id', getCustomersBookings);
router.get('/:id', getAllBookings);
router.post('/', dbcreateBooking);

module.exports = router;
