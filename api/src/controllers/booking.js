
const {createBooking,getBookingsDB,searchBooking} = require('../services/bookingServices.js')



const getBookings=async (req,res,next)=>{
     const {id}=req.params
     try {
        const data= await getBookingsDB(id)
        data?res.send(data):res.send({msg:'booking not found'})
      

     } catch (error) {
        if (error.response) {
            res.status(error.response.status).send({msg: error.response.status});
          } else if (error.request) {
            next(error.request);
          } else {
            next(error);
          }
     }
}

const createBookingDB= async (req,res,next)=>{
    try {
           const {carid}=req.body
         
        const data= await  createBooking(req)
           res.status(200).send(data)
    
       }
      catch (error) {
        if (error.response) {
            res.status(error.response.status).send({msg: error.response.status});
          } else if (error.request) {
            next(error.request);
          } else {
            next(error);
          }
     }

}

const getCustomersBookings=async(req,res,next)=>{
    const {id}=req.params
   try {
      const  BookingByCustomer= await searchBooking(id)
      res.status(200).send(BookingByCustomer)
       
   } catch (error) {
    if (error.response) {
        res.status(error.response.status).send({msg: error.response.status});
      } else if (error.request) {
        next(error.request);
      } else {
        next(error);
      }
   }
}

module.exports={
    createBookingDB,
    getBookings,
    getCustomersBookings
}