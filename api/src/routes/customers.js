const { Router } = require('express');
const router = Router();

const {
  getCustomers,
  getCustomerById,
  postCustomer,
  putCustomer,
  getCustomerByemail,
} = require('../controllers/customers');

router.get('/', getCustomers);

router.get('/:email', getCustomerByemail);
// router.get('/:id', getCustomerById);

router.put('/:id', putCustomer);

router.post('/', postCustomer);

module.exports = router;
