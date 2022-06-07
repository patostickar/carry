const { getAllCars } = require('../services/cars/getAllCars');
const { getAvailableCars } = require('../services/cars/getAvailableCars');
const {
  getAvailableCarTypes,
} = require('../services/cartypes/getAvailableCarTypes');
const { getCarById } = require('../services/cars/getCarById');
const { addCar } = require('../services/cars/addCar');
// const { updateCarLocation } = require('../services/cars/updateCarLocation');

module.exports.getAllCars = async (_req, res, next) => {
  try {
    const allCars = await getAllCars();
    if (!allCars.length)
      return res.status(400).send('No hay autos en la base de datos');
    res.send(allCars);
  } catch (error) {
    next(error);
  }
};

module.exports.getCarById = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).send('Por favor enviar el ID del auto');

  try {
    const data = await getCarById(id);
    data
      ? res.send(data)
      : res.status(400).send('No se encontró un auto con ese ID');
  } catch (error) {
    next(error);
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
      return res.status(400).send('No hay autos en esta ubicación');

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

module.exports.addCar = async (req, res, next) => {
  const { locationId, carTypeId } = req.body;

  if (!locationId)
    return res.status(400).send('Por favor enviar ID de ubicación');
  if (!carTypeId)
    return res.status(400).send('Por favor enviar ID de tipo de auto');

  try {
    const car = await addCar(locationId, carTypeId);
    res.status(200).send({ msg: 'Auto Creado', car });
  } catch (error) {
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
