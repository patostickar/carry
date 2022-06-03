const { Car, Location, Cartype } = require('../../db');

module.exports.getAllCars = async (id) => {
  return await Car.findAll({ include: [Cartype, Location] });
};
