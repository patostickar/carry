const { Router } = require('express');
const router = Router();

const {Customer, Review } = require("../../../db");


router.post("/:id", async (req,res,next)=>{
    try {
        Review.create()
        const {id}= req.params
        const customer= await  Customer.findOne({where:{id}})
        Review.SetCustomer(customer)
         res.send(customer)
        
    } catch (error) {
        res.send(error)
    }

})

module.exports=router