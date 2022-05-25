const { Router } = require('express');
const router = Router();


const {getLocations,postLocations, getLocationById}= require('../../controllers/location')


router.get('/',getLocations)

router.get('/:id',getLocationById)

router.post('/', postLocations)

module.exports = router;