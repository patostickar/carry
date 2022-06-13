const { Booking, Cartype ,Customer } = require('../../db');
const { getAvailableCars } = require('../cars/getAvailableCars');
const { DAY_MILISECONDS } = require('../../constants.js');
const { sendMAil } = require('../../services/mailer');


module.exports.createBooking = async (data) => {
  const { carTypeId, customerId, locationId, pickUpDate, dropOffDate,PremiumSecure,paymentId } = data;

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
  const { email } = await Customer.findByPk(customerId);
  const dateRange =
    (new Date(dropOffDate) - new Date(pickUpDate)) / DAY_MILISECONDS;
    let reservationTotal
    if(PremiumSecure){
       reservationTotal = ((price * dateRange)/100)*130;

    }else{
       reservationTotal = price * dateRange;

    } 

  const booking = await Booking.create({
    pickUpDate,
    dropOffDate,
    reservationTotal,
    PremiumSecure,
    paymentId
  });

  booking.setCustomer(customerId);
  booking.setCar(findAvailableCarOfType.id);
  booking.setCartype(findAvailableCarOfType.cartypeId);
  booking.setLocation(locationId);
  await sendMAil(email)

  return booking;
};
