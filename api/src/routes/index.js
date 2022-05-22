const { Router } = require('express');
const router = Router();

const cars = require('./cars.js');

router.use('/cars', cars);

module.exports = router;
