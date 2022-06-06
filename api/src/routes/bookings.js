const { Router } = require('express');
const router = Router();

const {
  dbcreateBooking,
  getallBookings,
  getCustomersBookings,
} = require('../controllers/bookings');

router.get('/', getallBookings);
router.get('/customer/:id', getCustomersBookings);
router.get('/:id', getallBookings);
router.post('/', dbcreateBooking);

module.exports = router;
