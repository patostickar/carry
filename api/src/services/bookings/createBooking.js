const { Booking, Cartype } = require('../../db');
const { getAvailableCars } = require('../cars/getAvailableCars');
const { DAY_MILISECONDS } = require('../../constants.js');

module.exports.createBooking = async (data) => {
  const { carTypeId, customerId, locationId, pickUpDate, dropOffDate } = data;

  
  const availableCars = await getAvailableCars(
    locationId,
    pickUpDate,
    dropOffDate
  );

  const findAvailableCarOfType = availableCars.find(
    (c) => c.cartypeId === carTypeId
  );

  if (!findAvailableCarOfType)
    throw new Error('No hay más autos disponibles de este tipo');

  const { price } = await Cartype.findByPk(findAvailableCarOfType.cartypeId);
  const dateRange =
    (new Date(dropOffDate) - new Date(pickUpDate)) / DAY_MILISECONDS;
  const reservationTotal = price * dateRange;

  const booking = await Booking.create({
    pickUpDate,
    dropOffDate,
    reservationTotal,
  });

  booking.setCustomer(customerId);
  booking.setCar(findAvailableCarOfType.id);
  booking.setCartype(findAvailableCarOfType.cartypeId);
  booking.setLocation(locationId);

  return booking;
};
