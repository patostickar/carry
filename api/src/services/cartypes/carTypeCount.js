const { Car } = require('../../db');

module.exports.carTypeCount = async (locationId) => {
  return await Car.count({
    attributes: ['cartypeId'],
    where: { locationId },
    group: 'cartypeId',
  });
};
