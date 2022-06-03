const { Car, Location, Cartype } = require('../../db');

module.exports.createCar = async (locationid, carTypeid) => {
  const car = await Car.create();
  const locationFound = await Location.findOne({ where: { id: locationid } });
  const carTypeFound = await Cartype.findOne({ where: { id: carTypeid } });

  if (!carTypeFound && !locationFound) return 'no se encontro ninguno';
  if (!locationFound) return 'no se encontro el lugar';
  if (!carTypeFound) return 'no se encontro el tipo de auto';

  car.setCartype(carTypeFound);
  car.setLocation(locationFound);
};
