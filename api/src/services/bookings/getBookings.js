const { Booking } = require('../../db');

module.exports.getBookings = async (id) => {
  if (id) {
    return await Booking.findOne({
      where: { id },
    });
  } else {
    return await Booking.findAll();
  }
};
