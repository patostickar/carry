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
  getActiveBooks,
  getActiveBooksCount,
  getReviews,
  postReview,
  getUserReviews,
} = require('../controllers/bookings');

router.get('/', [auth, admin], getAllBookings);
router.get('/active', getActiveBooks);
router.get('/active/count', getActiveBooksCount);
router.get('/customer/:id', auth, getCustomerBookings);
router.get('/reviews', getReviews);
router.get('/reviews/:id', auth, getUserReviews);
router.get('/:id', auth, getAllBookings);

router.post('/', [auth, validateCreateBooking], dbCreateBooking);
router.post('/reviews/:id', auth, postReview);

router.put('/:id', auth, editBooking);

module.exports = router;
