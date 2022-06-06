const { createBooking } = require('../services/bookings/createBooking');
const { getBookingsDB } = require('../services/bookings/getBookings');
const {
  getCustomerBookings,
} = require('../services/bookings/getCustomerBookings');

module.exports.getBookings = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await getBookingsDB(id);
    data ? res.send(data) : res.send({ msg: 'booking not found' });
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send({ msg: error.response.status });
    } else if (error.request) {
      next(error.request);
    } else {
      next(error);
    }
  }
};

module.exports.createBooking = async (req, res, next) => {
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
    if (error.response) {
      res.status(error.response.status).send({ msg: error.response.status });
    } else if (error.request) {
      next(error.request);
    } else {
      next(error);
    }
  }
};

module.exports.getCustomersBookings = async (req, res, next) => {
  const { id } = req.params;
  try {
    const bookingByCustomer = await getCustomerBookings(id);
    res.status(200).send(bookingByCustomer);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send({ msg: error.response.status });
    } else if (error.request) {
      next(error.request);
    } else {
      next(error);
    }
  }
};
