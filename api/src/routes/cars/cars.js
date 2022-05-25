const { Router } = require('express');
const router = Router();

const { createCar , getCars } = require('../../controllers/car');


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
router.put('/',(req,res)=>{

});
router.patch('/',(req,res)=>{

});


module.exports = router;
