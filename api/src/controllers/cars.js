const { getAvailableCars } = require('../services/cars/getAvailableCars');
const { getCarById } = require('../services/cars/getCarById');
const { createCar } = require('../services/cars/createCar');
const { updateCarLocation } = require('../services/cars/updateCarLocation');

module.exports.getAvailableCars = async (req, res, next) => {
  const { pickUpLocationId, pickUpDate, dropOffDate } = req.query;

  if (!pickUpLocationId || !pickUpDate || !dropOffDate)
    return res.status(400).send('Please send all the mandatory information');

  try {
    const availableCars = await getAvailableCars(
      pickUpLocationId,
      pickUpDate,
      dropOffDate
    );
    res.send(availableCars);
  } catch (error) {
    next(error);
  }
};

module.exports.getCarById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await getCarById(id);
    if (!id) {
      data.length
        ? res.send(data)
        : res.send({ msg: 'no se encontraron autos' });
    } else {
      data ? res.send(data) : res.send({ msg: 'no se encontraron autos' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports.createCar = async (req, res, next) => {
  const { locationid, carTypeid } = req.body;
  try {
    await createCar(locationid, carTypeid);
    res.status(200).send({ msg: 'auto creado' });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// const updateCarDate = async (req, res, next) => {
//    // funciona para enviar 1 o 2 datos el dato que no se asigna se envia como null
//    const { pickupDate, returnDate } = req.body;
//    const { id } = req.params;
//    try {
//      const response = await updateDate(id, pickupDate, returnDate);

//      res.send({msg : response});
//    } catch (error) {
//      next(error);
//    }
//  }

module.exports.updateLocation = async (req, res, next) => {
  const { locationid } = req.body;
  const { id } = req.params;
  try {
    const response = await updateCarLocation(id, locationid);
    res.send({ msg: response });
  } catch (error) {
    next(error);
  }
};
