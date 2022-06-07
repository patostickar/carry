const { Cartype } = require('../../db');

module.exports.findCarType = async (id) => {
  if (id) {
    return await Cartype.findByPk(id);
  }
  return await Cartype.findAll();
};
