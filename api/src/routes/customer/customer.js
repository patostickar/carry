const { Router } = require('express');
const router = Router();


const {getCustomers,getCustomerById,postCustomer, putCustomer}=require('../../controllers/customer')

router.get('/',async (req, res, next) => {
    try {
   
            const data= await getCustomers()
            res.send(data)
          

      
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

  router.get('/:id', async ( req,res,next)=>{
    try {
        const {id}=req.params
        if (id) {
            const data=await getCustomerById(id)
            data? res.status(200).send(data):res.send({msg:'Customer not found by id'})
        } else{
            res.send({msg:'Customer not found'})
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

router.put('/:id', async (req,res,next)=>{
    try {
        const {id}=req.params
        if (id) {
            const data= await putCustomer(id,req)
            data? res.status(200).send(data):res.send({msg:'Customer not found'})
        } else{
            res.send({msg:'Customer not found'})
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
    return await postCustomer(req,res,next)
})


module.exports=router