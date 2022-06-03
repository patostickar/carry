const { Cartype } = require('../../db');

module.exports.getAvailableCarTypes = async (availableCars) => {
  const availableCarTypesId = Array.from(
    new Set(availableCars.map((c) => c.dataValues.cartypeId))
  );

  const carTypes = await Cartype.findAll({
    where: { id: availableCarTypesId },
  });

  console.log('Available types: ', availableCarTypesId.length);

  return carTypes;
};
