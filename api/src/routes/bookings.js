const { Router } = require('express');
const router = Router();

const {
  dbCreateBooking,
  getAllBookings,
  getCustomerBookings,
} = require('../controllers/bookings');

router.get('/', getAllBookings);
router.get('/customer/:id', getCustomerBookings);
router.get('/:id', getAllBookings);
router.post('/', dbCreateBooking);

module.exports = router;
