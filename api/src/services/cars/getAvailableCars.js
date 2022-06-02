const { Car, Location } = require('../../db');

module.exports.getAvailableCars = async (
  pickUpLocation,
  pickUpDate,
  dropOffDate
) => {
  const carsInLocation = await Car.findAll({ include: Location });
  return carsInLocation;
};

/*
Document.findAll({
where: {'$employee.manager.id$': id},
      include: [{
        model: models.Employee,
        required: true,
        as: 'employee',
        include: [{
          model: models.Manager,
          required: true,
          as: 'manager',
          where: { id: managerId },
        }],
      }],

*/
