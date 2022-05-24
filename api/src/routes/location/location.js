const { Router } = require('express');
const router = Router();


const {getLocations,postLocations, getLocationByName, getLocationById}= require('../../controllers/location')


router.get('/',async (req, res, next) => {
    try {
          const {name}=req.query
          const {id}=req.params
          
          if (id) {
              const data=await getLocationById(id)
              data? res.status(200).send(data):res.send({msg:'Location not found by id'})
          }
          if (name) {
              const data=await getLocationByName(name.toLocaleLowerCase())
           data? res.status(200).send(data) : res.send({msg:'Location not found by name'})
          } else{
            const data= await getLocations()
            res.send(data)
          }

      
    } catch (error) {
        if (error.response) {
            res.status(error.response.status).send({msg: error.response.status});
          } else if (error.request) {
            next(error.request);
          } else {
            next(error);
          }
    }
  })

router.post('/', async (req,res,next)=>{
    return await postLocations(req,res,next)
})
module.exports = router;