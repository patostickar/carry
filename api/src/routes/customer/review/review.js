const { Router } = require('express');
const router = Router();

const {Customer, Review } = require("../../../db");


router.get("/",async(req,res,next)=>{
    try {
        const {id1,id2,id3} =req.query
        const testimonios = []
        
       
        testimonios.push(await Review.findOne({where: { id: id1},include: [Customer]}))
        testimonios.push(await Review.findOne({where: { id: id2},include: [Customer]}))
        testimonios.push(await Review.findOne({where: { id: id3},include: [Customer]}))
        res.send(testimonios)
        
    } catch (error) {
        next(error)
    }
})
router.get("/count",async(req,res,next)=>{
    try {
        const count = await Review.count()
        res.send({count})
    } catch (error) {
        next(error)
    }
})



router.post("/:id", async (req,res,next)=>{
    const {id}= req.params
    const {testimonio} = req.body
    try {
        const review = await Review.create({review:testimonio})
        const customer = await  Customer.findOne({where:{id}})
        review.setCustomer(customer)
        res.send("review Creada")
    } catch (error) {
       console.log(error);
       next(error)
    }

})

module.exports=router