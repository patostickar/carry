const { Router } = require('express');
const router = Router();

const {Customer, Review } = require("../db");


router.get("/",async(req,res,next)=>{
    try {
        // const {id1,id2,id3} =req.query
        const testimonios = []
        const count = await Review.count()
        const Getrandom = () =>{return Math.floor(Math.random()*(count-1+1)+1)}
            let id1 = Getrandom()
            let id2 = Getrandom()
            let id3 = Getrandom()
            if(id2 === id1){id2 = Getrandom()}
            if(id3 === id1 || id3 === id2){id3 = Getrandom()}
            console.log(id1,id2,id3);
        testimonios.push(await Review.findOne({where: { id: id1},include: [Customer]}))
        testimonios.push(await Review.findOne({where: { id: id2},include: [Customer]}))
        testimonios.push(await Review.findOne({where: { id: id3},include: [Customer]}))
        res.send(testimonios)
        
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