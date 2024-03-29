const { Car, Location } = require('../../db');

module.exports.updateCarLocation = async (id, locationId) => {
  const carfound = await Car.findOne({ where: { id } });
  const locationFound = await Location.findOne({ where: { id: locationId } });

  if (!carfound) return 'auto no encontrado';
  if (!locationFound) return 'no se encontro el lugar';

  carfound.setLocation(locationFound);
  return 'localizacion actualizada';
};
