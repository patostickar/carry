const { Booking, Customer, Cartype } = require('../../db');

const searchBooking = async (id) => {
  const data = await Booking.findAll({
    where: {customerId: id},
    include: [ Cartype],
  });
  if (data.length > 0) {
    return { bookings: data };
  } else {
    return { bookings: data };
  }
};

    module.exports={searchBooking}

    