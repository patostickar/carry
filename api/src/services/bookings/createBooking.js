const { Booking } = require('../../db');
const { getAvailableCars } = require('../cars/getAvailableCars');

module.exports.createBooking = async (data) => {
  const {
    carTypeId,
    customerId,
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    dropOffDate,
    reservationTotal,
  } = data;

  const availableCars = await getAvailableCars(
    pickUpLocation,
    pickUpDate,
    dropOffDate
  );

  // Luego para el usuario premium habría que buscar el de menor kilometraje,
  // aunque eso ni siquiera forma parte de nuestra DB...

  const findAvailableCarOfType = availableCars.find(
    (c) => c.cartypeId === carTypeId
  );

  if (!findAvailableCarOfType)
    throw new Error('No hay más autos disponibles de este tipo');

  const booking = await Booking.create({
    pickUpDate,
    dropOffDate,
    reservationTotal,
  });

  booking.setCustomer(customerId);
  booking.setCar(findAvailableCarOfType.id);
  booking.setPickUpLocation(pickUpLocation);
  booking.setDropOffLocation(dropOffLocation);

  console.log(booking.dataValues);
  return 'Reserva confirmada';
};
