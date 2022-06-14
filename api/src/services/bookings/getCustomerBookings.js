const { Booking, Cartype } = require('../../db');

const searchBooking = async (id) => {
  const data = await Booking.findAll({
    where: { customerId: id },
    include: [Cartype],
  });

  return { bookings: data };
};

module.exports = { searchBooking };
