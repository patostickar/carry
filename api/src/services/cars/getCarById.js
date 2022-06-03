const { Car, Location, Cartype } = require('../../db');

module.exports.getCarById = async (id) => {
  if (id) {
    return await Car.findOne({
      where: { id },
      include: [Cartype, Location],
    });
  } else {
    return await Car.findAll({ include: [Cartype, Location] });
  }
};
