const { getCarsDB, DBcreateCar, updateDate, updateCarLocation } = require("../services/getCars");

const getCars = async (req, res, next) => {
  const {id} = req.params
   try {
    const data = await getCarsDB(id);
     res.send(data);
   } catch (error) {
     next(error)
   }
 }

const createCar = async (req, res, next) => {
  const { locationid, carTypeid } = req.body;
  try {
    await DBcreateCar(locationid, carTypeid);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

const updateCarDate = async (req, res, next) => {
   // funciona para enviar 1 o 2 datos el dato que no se asigna se envia como null
   const { pickupDate, returnDate } = req.body;
   const { id } = req.params;
   try {
     updateDate(id, pickupDate, returnDate);
     res.sendStatus(200);
   } catch (error) {
     next(error);
   }
 }

const updateLocation = async (req, res, next) => {
   const { locationid } = req.body;
   const { id } = req.params;
   updateCarLocation(id,locationid)
   res.sendStatus(200)
 
 }

module.exports = {
    getCars,
    createCar,
    updateCarDate,
    updateLocation
}
 
 