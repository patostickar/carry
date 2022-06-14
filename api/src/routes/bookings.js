const { Router } = require('express');
const router = Router();
const { Booking } = require('../db');

const { validateCreateBooking } = require('../validators/validators');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

const {
  dbCreateBooking,
  getAllBookings,
  getCustomerBookings,
  editBooking,
  GETActiveBooks,
  getReviews,
  postReview,
  getUserReviews,
} = require('../controllers/bookings');

router.get('/', [auth, admin], getAllBookings);
router.get('/Active', GETActiveBooks);
router.get('/Active/count', async (req, res, next) => {
  const data = await Booking.count({
    attributes: ['cartypeId'],
    where: { status: 'activo' },
    include: ['cartype'],
    group: 'cartypeId',
  });
  console.log(data);
  res.send(data);
});
router.get('/customer/:id', auth, getCustomerBookings);
router.get('/reviews', getReviews);
router.get('/reviews/:id', auth, getUserReviews);
router.get('/:id', auth, getAllBookings);

router.post('/', [auth, validateCreateBooking], dbCreateBooking);
router.post('/reviews/:id', auth, postReview);

router.put('/:id', auth, editBooking);

module.exports = router;
