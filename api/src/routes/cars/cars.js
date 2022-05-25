const { Router } = require('express');
const router = Router();

const { createCar , getCars, updateCar } = require('../../controllers/car');


router.get('/',async(req, res, next) => {
    try {
    const data = await getCars()
    res.send(data)
    } catch (error) {
      next(error);
    }
  })
  ;
router.post('/',async (req,res,next)=>{
  const{locationid,carTypeid}=req.body
  try {
   await createCar(locationid,carTypeid)
      res.sendStatus(200)
  } catch (error) {
      console.log(error)
    next(error);
  }


});
router.patch('/:id',async(req,res,next)=>{
  const {pickupDate,returnDate} = req.body
  const {id} = req.params
  try {
    updateCar(pickupDate,returnDate,id)
    res.sendStatus(200)
    
  } catch (error) {
    next(error)
  }
  

});



module.exports = router;
