const { Booking } = require('../../db');

module.exports.createBooking = async (data) => {
  const {
    carId,
    customerId,
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    dropOffDate,
    reservationTotal,
  } = data;

  const booking = await Booking.create({
    pickUpDate,
    dropOffDate,
    reservationTotal,
  });

  booking.setCustomer(customerId);
  booking.setCar(carId);
  booking.setPickUpLocation(pickUpLocation);
  booking.setDropOffLocation(dropOffLocation);

  console.log(booking.dataValues);
  return 'Booking created';
};
