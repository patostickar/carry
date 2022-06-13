const { Router } = require('express');
const router = Router();
const { validateCreateBooking } = require('../validators/validators');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const {
  dbCreateBooking,
  getAllBookings,
  getCustomerBookings,
  editBooking,
  GETActiveBooks,
} = require('../controllers/bookings');

router.get('/', [auth, admin], getAllBookings);
router.get('/Active', GETActiveBooks);
router.get('/customer/:id', auth, getCustomerBookings);
router.get('/:id', auth, getAllBookings);

router.post('/', [auth, validateCreateBooking], dbCreateBooking);

router.put('/:id', auth, editBooking);

module.exports = router;
