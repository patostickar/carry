const {Car, Location, Cartype} = require("../db")

module.exports.createCar = async (locationid,carTypeid)=>{
   const car = await Car.create()
    car.setLocation(await Location.findOne(({
        where:{id : locationid}
    })))
    car.setCartype(await Cartype.findOne(({
        where:{id : carTypeid}
    })))
  }

//  "id", "pickup_date", "return_date", "locationId", "cartypeId" 