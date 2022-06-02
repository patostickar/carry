const { Booking, Car,Location,Customer } = require("../db");



const getBookingsDB=async (id)=>{
   if (id) {
       return await Booking.findOne({
           where:{id}
        })
   } else{
    return await Booking.findAll()
  
   }


}

const createBooking= async (req)=>{
    const {carid,customerid,locationStart,locationEnd ,return_date,pickup_date,reservation_total,Status}=req.body
      if (carid && customerid && locationStart && locationEnd && return_date &&pickup_date && reservation_total && Status) {
        if ( pickup_date===return_date || return_date<pickup_date ) {
            return 'Deben ser diferentes fechas para generar la reserva y la fecha de retorno no puede ser menor a la fecha inicio '
        }

      const customer= await  Customer.findOne({where:{id:customerid}})
      const car= await  Car.findOne({where:{id:carid}})
      const lstart= await  Location.findOne({where:{id:locationStart}})
      const lend= await Location.findOne({where:{id:locationEnd}})
      const {dataValues}=car
   
       const [booking,created]=await Booking.findOrCreate({
        where:{
            carId:carid,
            pickup_date,
            return_date,
        },
        defaults:{
            Status,
            reservation_total,
            locationId:dataValues.locationId
        },})

    if(customer){booking.setCustomer(customer) }else{return 'Customer not found'}
    if(car){booking.setCar(car) }else{return 'Car not found'}
    if(lstart){booking.setPickupLocation(lstart) }else{return 'Location start not found'}
    if(lend){booking.setDropoffLocation(lend) }else{return 'Location end not found'}

   
        if (created) {
            return 'Booking created'
        }else{
            return 'El car ya se encuentra reservado'
        }
 
      }else{
          return 'Incomplete data'
      }

       
     
}

const searchBooking= async (id)=>{
   const data= await Booking.findAll({
       where:{
           customerId:id
       }
   })
   if (data.length>0) {
    return {bookings: data}
   }else{
     return {bookings: 'No hay reservas para este cliente'}
   }
}


module.exports={
    getBookingsDB,
    createBooking,
    searchBooking
}