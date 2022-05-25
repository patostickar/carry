const { Car, Location, Cartype } = require("../db");

const createCar = async (locationid, carTypeid) => {
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

const getCars = async ()=>{
    const cars = await Car.findAll()
 
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

module.exports = {
    getCars,
    createCar
}
 
 