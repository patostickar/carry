const { Router } = require('express');
const router = Router();

const {
  getCustomers,
  getCustomerByemail,
  getReviews,
  postCustomer,
  postReview,
  putCustomer,
  // getCustomerById,
} = require('../controllers/customers');

router.get('/', getCustomers);
router.get('/reviews', getReviews);
router.get('/:email', getCustomerByemail);

router.post('/', postCustomer);
router.post('/reviews', postReview);

router.put('/:id', putCustomer);

// router.get('/:id', getCustomerById);

module.exports = router;
