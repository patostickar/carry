const { Router } = require('express');
const router = Router();
const {
  getCustomers,
  // getCustomerByemail,
  getReviews,
  postCustomer,
  postReview,
  getUserReviews,
  putCustomer,
  // getCustomerById,
} = require('../controllers/customers');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', [auth, admin], getCustomers);
router.get('/reviews', getReviews);
router.get('/reviews/:id', auth, getUserReviews);
// router.get('/:email', getCustomerByemail);

router.post('/', auth, postCustomer);
router.post('/reviews/:id', auth, postReview);

router.put('/:id', auth, putCustomer);

// router.get('/:id', getCustomerById);

module.exports = router;
