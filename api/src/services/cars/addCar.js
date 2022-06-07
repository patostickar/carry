const { Car, Location, Cartype } = require('../../db');

module.exports.addCar = async (locationId, carTypeId) => {
  const location = await Location.findByPk(locationId);
  const carType = await Cartype.findByPk(carTypeId);

  if (!location) throw new Error('No se encontró una ubicación con ese ID');
  if (!carType) throw new Error('No se encontró un tipo de auto con ese ID');

  const car = await Car.create();
  car.setCartype(carType);
  car.setLocation(location);

  return car;
};
