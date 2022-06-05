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

module.exports.createBookingDB = async (req, res, next) => {
  try {
  

    const data = await createBooking(req);
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
