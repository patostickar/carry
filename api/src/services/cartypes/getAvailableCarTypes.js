const { Cartype } = require('../../db');
const { DAY_MILISECONDS } = require('../../constants.js');

module.exports.getAvailableCarTypes = async (
  availableCars,
  pickUpDate,
  dropOffDate
) => {
  const availableCarTypesId = Array.from(
    new Set(availableCars.map((c) => c.dataValues.cartypeId))
  );

  const carTypes = await Cartype.findAll({
    where: { id: availableCarTypesId },
  });

  const dateRange =
    (new Date(dropOffDate) - new Date(pickUpDate)) / DAY_MILISECONDS;

  for (const car of carTypes) {
    car.dataValues.price = car.dataValues.price * dateRange;
  }

  return carTypes;
};
