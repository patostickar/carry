const { Router } = require('express');
const router = Router();

const {
  getCustomers,
  getCustomerByemail,
  getReviews,
  postCustomer,
  postReview,
  getUserReviews,
  putCustomer,
  // getCustomerById,
} = require('../controllers/customers');

router.get('/', getCustomers);
router.get('/reviews', getReviews);
router.get('/reviews/:id', getUserReviews);
router.get('/:email', getCustomerByemail);

router.post('/', postCustomer);
router.post('/reviews/:id', postReview);

router.put('/:id', putCustomer);

// router.get('/:id', getCustomerById);

module.exports = router;
