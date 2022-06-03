const { Router } = require('express');
const router = Router();


const PaymentController= require('../../controllers/payments');
const PaymentServices= require('../../services/paymentServices');
const PaymentInstance= new PaymentController(new PaymentServices());


router.get('/payment', (req,res, next)=>{
    PaymentInstance.createPayment(req,res);
})
router.get('/subscription',(req,res, next)=>{
    PaymentInstance.createSubscription(req,res);
})

module.exports = router;