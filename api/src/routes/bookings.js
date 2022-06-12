const { Router } = require('express');
const router = Router();
const { validateCreateBooking } = require('../validators/validators');

const {
  dbCreateBooking,
  getAllBookings,
  getCustomerBookings,
  editBooking,
  GETActiveBooks,
} = require('../controllers/bookings');


router.get('/', getAllBookings);
router.get('/Active', GETActiveBooks);
router.get('/customer/:id', getCustomerBookings);
router.get('/:id', getAllBookings);

router.post('/',validateCreateBooking, dbCreateBooking);

router.put('/:id', editBooking);

module.exports = router;


