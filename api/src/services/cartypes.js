const { Car, Location, Cartype } = require("../db");

const getTypeDB = async (id) => {
    if(id){return await Cartype.findOne({where: { id: id }})}
    const types = await Cartype.findAll()
   const typesMap = types.map(type =>{return{
           id: type.id,
           make: type.make,
           model: type.model,
           classCode: type.classCode,
           className: type.className,
           transmission: type.transmission ,
           mpg: type.mpg ,
           img: type.img,
           doors: type.doors,
           seats: type.seats,
           airConditioning: type.air_conditioning,
           largeSuitcase: type.large_suitcase,
           smallSuitcase: type.small_suitcase}
    })
    return typesMap
}


module.exports = {
    getTypeDB
}