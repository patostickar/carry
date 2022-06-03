const { Booking } = require('../../db');

module.exports.searchBooking = async (id) => {
  const data = await Booking.findAll({
    where: {
      customerId: id,
    },
  });
  if (data.length > 0) {
    return { bookings: data };
  } else {
    return { bookings: 'No hay reservas para este cliente' };
  }
};
