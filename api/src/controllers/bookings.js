const { createBooking } = require('../services/bookings/createBooking');
const { getBookings } = require('../services/bookings/getBookings');
const { searchBooking } = require('../services/bookings/getCustomerBookings');

const getallBookings = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await getBookings(id);
    data ? res.send(data) : res.send({ msg: 'booking not found' });
  } catch (error) {
    next(error);
  }
};

const dbcreateBooking = async (req, res, next) => {
  const { carTypeId, customerId, locationId, pickUpDate, dropOffDate } =
    req.body;

  if (!carTypeId || !customerId || !locationId || !pickUpDate || !dropOffDate)
    return 'Se requiere enviar todos los parámetros';

  if (dropOffDate < pickUpDate) {
    return 'La reserva mínima es de 24hs';
  }

  try {
    const data = await createBooking(req.body);
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};

const getCustomersBookings = async (req, res, next) => {
  const { id } = req.params;
  try {
    const bookingByCustomer = await searchBooking(id);
    res.status(200).send(bookingByCustomer);
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getallBookings,
  dbcreateBooking,
  getCustomersBookings,
};
