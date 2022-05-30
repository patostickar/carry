
const { Car, Location, Cartype } = require("../db");

const getCarsDB = async (id)=>{
  if(id){return await Car.findOne({where: { id: id },include: [Cartype,Location]})}
  else {return  await Car.findAll({ include: [Cartype,Location]})

  }
 
   }
   const DBcreateCar = async (locationid, carTypeid) => {
    const car = await Car.create();
    const locationFound =  await Location.findOne({where: { id: locationid }})
    const carTypeFound =   await Cartype.findOne({ where: { id: carTypeid }})
    if(carTypeFound){car.setCartype(carTypeFound)}
    if(locationFound){car.setLocation(locationFound);}
    if (!carTypeFound && !locationFound) return "no se encontro ninguno"
    if (!locationFound) return "no se encontro el lugar"
    if (!carTypeFound) return "no se encontro el tipo de auto"
  };
  const updateDate = async (id,pickupDate,returnDate)=>{
    const carfound = await Car.findOne({where: { id}})
    if(!carfound){return("auto no encontrado")}
     if(pickupDate){ await carfound.update({pickup_date: pickupDate })}
     if(returnDate){ await carfound.update({return_date: returnDate })}
     if(!returnDate && !pickupDate){return "debe ingresar al menos un dato"}
     return "fechas actualizadas"
  }
  const updateCarLocation = async (id,locationid)=>{
    const carfound = await Car.findOne({where: { id}})
    const locationFound =  await Location.findOne({where: { id: locationid }})
    if(!carfound) return("auto no encontrado")
    if(!locationFound) return "no se encontro el lugar"
    carfound.setLocation(locationFound);
    return "localizacion actualizada"
 
 }

   module.exports = {
       getCarsDB,
       DBcreateCar,
       updateDate,
       updateCarLocation
   }