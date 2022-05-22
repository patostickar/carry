const { Router } = require('express');
const router = Router();

const { getCars } = require('../controllers/getCars');

router.get('/', getCars);

module.exports = router;
