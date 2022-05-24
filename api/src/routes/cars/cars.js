const { Router } = require('express');
const router = Router();

const { createCar } = require('../../controllers/createCar');
const { getCars } = require('../../controllers/getCars');

router.get('/',(req, res, next) => {
    try {
    res.send(getCars())
    } catch (error) {
      next(error);
    }
  })
  ;
router.post('/',(req,res)=>{
  const{locationid,carTypeid}=req.body
  try {
      createCar(locationid,carTypeid)
  } catch (error) {
    next(error);
  }


});
router.put('/',(req,res)=>{

});
router.patch('/',(req,res)=>{

});


module.exports = router;
