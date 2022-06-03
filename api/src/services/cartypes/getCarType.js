const { Cartype } = require('../../db');

module.exports.getCarType = async (id) => {
  if (id) {
    return await Cartype.findOne({ where: { id } });
  }
  const types = await Cartype.findAll();
  return types;
};
