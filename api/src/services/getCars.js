
const { Car, Location, Cartype } = require("../db");

const getCarsDB = async (id)=>{
  let cars
  if(id){return await Car.findOne({where: { id: id }})}
  else {cars = await Car.findAll()
    const carmap = cars.map( car =>{
       return {
          id: car.id,
          pickup_date:car.pickup_date,
          return_date: car.return_date,
          locationId: car.locationId,
          cartypeId: car.cartypeId
       }
    })
    return carmap
  }
 
   }
   const DBcreateCar = async (locationid, carTypeid) => {
    const car = await Car.create();
    const locationFound =  await Location.findOne({where: { id: locationid }})
    const carTypeFound =   await Cartype.findOne({ where: { id: carTypeid }})
    if(carTypeFound && locationFound){
      car.setLocation(locationFound);
      car.setCartype(carTypeFound);
      return "todo ok"}
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