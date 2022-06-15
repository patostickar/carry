const { Booking, Cartype, Location } = require('../../db');

const searchBooking = async (id) => {
  const data = await Booking.findAll({
    where: { customerId: id },
    include: [Cartype, Location],
  });

  return { bookings: data };
};

module.exports = { searchBooking };
