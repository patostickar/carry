const { Booking, Customer, Cartype } = require('../../db');


module.exports.getBookings = async (id) => {
  if (id) {
    return await Booking.findOne({
      where: { id },
      include: [ Cartype],
    });
  } else {
    return await Booking.findAll({  include: [ Cartype]});
  }
};
