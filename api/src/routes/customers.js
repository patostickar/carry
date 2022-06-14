const { Router } = require('express');
const router = Router();
const {
  getCustomers,
  // getCustomerByemail,
  postCustomer,
  putCustomer,
  // getCustomerById,
} = require('../controllers/customers');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

router.get('/', [auth, admin], getCustomers);

// router.get('/:email', getCustomerByemail);

router.post('/', postCustomer);

router.put('/:id', auth, putCustomer);

// router.get('/:id', getCustomerById);

module.exports = router;
