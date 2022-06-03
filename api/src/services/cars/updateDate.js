// const updateDate = async (id,pickupDate,returnDate)=>{
//   const carfound = await Car.findOne({where: { id}})
//   if(!carfound){return("auto no encontrado")}
//    if(pickupDate){ await carfound.update({pickupDate: pickupDate })}
//    if(returnDate){ await carfound.update({returnDate: returnDate })}
//    if(!returnDate && !pickupDate){return "debe ingresar al menos un dato"}
//    return "fechas actualizadas"
// }
