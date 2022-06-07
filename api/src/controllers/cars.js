const { getAllCars } = require('../services/cars/getAllCars');
const { getAvailableCars } = require('../services/cars/getAvailableCars');
const {
  getAvailableCarTypes,
} = require('../services/cartypes/getAvailableCarTypes');
const { getCarById } = require('../services/cars/getCarById');
const { createCar } = require('../services/cars/createCar');
// const { updateCarLocation } = require('../services/cars/updateCarLocation');

module.exports.getAllCars = async (req, res, next) => {
  try {
    const allCars = await getAllCars();
    res.send(allCars);
  } catch (error) {
    console.log(error);
  }
};

module.exports.getAvailableCars = async (req, res, next) => {
  const { locationId, pickUpDate, dropOffDate } = req.query;

  if (!locationId || !pickUpDate || !dropOffDate)
    return res.status(400).send('Por favor completar ubicación y fechas');

  try {
    const availableCars = await getAvailableCars(
      locationId,
      pickUpDate,
      dropOffDate
    );

    if (!availableCars.length)
      return res.send('No hay autos en esta ubicación');

    const availableCarTypes = await getAvailableCarTypes(
      availableCars,
      pickUpDate,
      dropOffDate
    );
    res.send(availableCarTypes);
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

// module.exports.updateLocation = async (req, res, next) => {
//   const { locationid } = req.body;
//   const { id } = req.params;
//   try {
//     const response = await updateCarLocation(id, locationid);
//     res.send({ msg: response });
//   } catch (error) {
//     next(error);
//   }
// };
