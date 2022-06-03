const { Booking, Cartype } = require('../../db');
const { getAvailableCars } = require('../cars/getAvailableCars');
const { DAY_MILISECONDS } = require('../../constants.js');

module.exports.createBooking = async (data) => {
  const {
    carTypeId,
    customerId,
    pickUpLocation,
    dropOffLocation,
    pickUpDate,
    dropOffDate,
  } = data;

  const availableCars = await getAvailableCars(
    pickUpLocation,
    pickUpDate,
    dropOffDate
  );

  // Luego para el usuario premium habría que buscar el de menor kilometraje,
  // aunque eso ni siquiera forma parte de nuestra DB...

  // EL PROBLEMA ESTÁ ACÁ. PORQUE TENGO AUTOS DEL TIPO DISPONIBLE,
  // PERO ME VUELVE A RESERVAR EL QUE YA ESTÁ RESERVADO PORQUE NO ESTOY FILTRANDO POR EL ESTADO ACTIVO.
  // Y EL MÉTOOD FIND AGARRA EL PRIMERO
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
  booking.setPickUpLocation(pickUpLocation);
  booking.setDropOffLocation(dropOffLocation);

  console.log(booking.dataValues);
  return 'Reserva confirmada';
};
