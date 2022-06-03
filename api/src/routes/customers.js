const { Router } = require('express');
const router = Router();

const {
  getCustomers,
  getCustomerById,
  postCustomer,
  putCustomer,
} = require('../controllers/customers');

router.get('/', getCustomers);

router.get('/:id', getCustomerById);

router.put('/:id', putCustomer);

router.post('/', postCustomer);

module.exports = router;
