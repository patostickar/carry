const { Router } = require('express');
const router = Router();
const mercadopago=require('mercadopago')

mercadopago.configure({
  access_token:"APP_USR-6360352193747956-060714-aec6bef07e2d00e2e9432a2aec325687-1138471551"
})

//  {"id":1138471551,"nickname":"TETE6664362","password":"qatest125","site_status":"active","email":"test_user_58160946@testuser.com"} vendedor
//  {"id":1138475272,"nickname":"TESTBKYLW8EZ","password":"qatest9287","site_status":"active","email":"test_user_45836003@testuser.com"}comprador





router.post('/payment', (req,res, next)=>{
   const {total,id} = req.body


  const items=[{
      title: "reserva Carry",
      unit_price: parseInt(total),
      quantity:1,
  }]

  const preference={
      items,
      external_reference:`${id}`,
      payment_methods:{
          excluded_payment_types:[
              {
                  id:'atm'
              },
             {id: "ticket"}
          ],
          installments:1
      },
      back_urls: {
        pending: "http://localhost:3000/response",
        success: "http://localhost:3000/response",
      },
      auto_return: "approved",
      binary_mode: true
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