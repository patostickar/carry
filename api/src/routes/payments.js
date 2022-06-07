const { Router } = require('express');
const router = Router();
const {Booking, Customer}=require('../db')
const mercadopago=require('mercadopago')

mercadopago.configure({
  access_token:process.env.ACCESS_TOKEN
})





router.get('/payment', (req,res, next)=>{
   const idOrder=1

  const carrito=[
      {title:'Reserva 1', quantity:10, price:100},
      {title:'Reserva 2', quantity:20, price:250},
      {title:'Reserva 3', quantity:11, price:500},
  ]

  const itemsB=carrito.map((b)=>({
      title:b.title,
      unit_price:b.price,
      quantity:b.quantity
  }))

  const preference={
      items:itemsB,
      external_reference:`${idOrder}`,
      payment_methods:{
          excluded_payment_types:[
              {
                  id:'atm'
              }
          ],
          installments:3
      },
      back_urls: {
        failure: "/failure",
        pending: "/pending",
        success: "/success",
      },
  }

 mercadopago.preferences.create(preference)
 .then(function(response){
     console.info('respondio')
     global.id=response.body.id
     console.log(response.body,'body')
     res.json({id:global.id})
 })
 .catch(function(error){
     console.log(error)
 })
  



})


module.exports = router;