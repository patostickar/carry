const { Booking, Review } = require('../db');
const { createBooking } = require('../services/bookings/createBooking');
const {
  getBookings,
  getActiveBookings,
} = require('../services/bookings/getBookings');
const { searchBooking } = require('../services/bookings/getCustomerBookings');
const { randomReviews } = require('../services/bookings/randomReviews');
const { userReviewsDetail } = require('../services/bookings/userReviews');
const { DAY_MILISECONDS } = require('../constants');

const getAllBookings = async (req, res, next) => {
  const { id } = req.params;
  try {
    const booking = await getBookings(id);
    booking
      ? res.send(booking)
      : res.status(400).send('No se encontró una reserva con ese ID');
  } catch (error) {
    next(error);
  }
};

const getCustomerBookings = async (req, res, next) => {
  const { id } = req.params;

  if (!id) return res.status(400).send('Se requiere enviar el ID del cliente');

  try {
    const booking = await searchBooking(id);
    res.send(booking);
  } catch (error) {
    next(error);
  }
};

const dbCreateBooking = async (req, res, next) => {
  const { pickUpDate, dropOffDate } = req.body;

  if (new Date(dropOffDate) - new Date(pickUpDate) <= DAY_MILISECONDS) {
    return res.status(400).send('La reserva mínima es de 24hs');
  }

  if (new Date(pickUpDate) - new Date() < -DAY_MILISECONDS) {
    return res
      .status(400)
      .send(`Fecha de retiro no puede ser anterior a ${new Date().toString()}`);
  }
  try {
    const booking = await createBooking(req.body);
    res.status(201).send({ msg: 'Reserva confirmada', booking });
  } catch (error) {
    next(error);
  }
};

const editBooking = async (req, res, next) => {
  const { id } = req.params;

  if (!id)
    return res.status(400).send('Se requiere enviar el ID de la reserva');

  try {
    const booking = await Booking.findByPk(id);
    booking.update(req.body);
    res.send(booking);
  } catch (error) {
    next(error);
  }
};

const getActiveBooks = async (req, res, next) => {
  try {
    res.send(await getActiveBookings());
  } catch (error) {
    next(error);
  }
};

const getActiveBooksCount = async (req, res, next) => {
  try {
    const data = await Booking.count({
      attributes: ['cartypeId'],
      where: { status: 'activo' },
      include: ['cartype'],
      group: 'cartypeId',
    });
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const getReviews = async (_req, res, next) => {
  try {
    res.send(await randomReviews());
  } catch (error) {
    next(error);
  }
};

const getUserReviews = async (req, res, next) => {
  const { id } = req.params;

  try {
    const userReview = await userReviewsDetail(id);
    res.send(userReview);
  } catch (error) {
    next(error);
  }
};

const postReview = async (req, res, next) => {
  const { id } = req.params;
  const { review } = req.body;

  if (!id || !review.length)
    return res.status(400).send('El testimonio no puede estar vacío');

  try {
    const booking = await Booking.findByPk(id);
    if (!booking) return res.status(400).send('No hay una reserva con ese id');
    if (booking.reviewId)
      return res.status(400).send('Esta reserva ya tiene una review');
    const newReview = await Review.create({ review });
    newReview.setBooking(booking);
    res
      .status(201)
      .send({ msg: 'Gracias por compartir tu testimonio!', review });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllBookings,
  getActiveBooks,
  getActiveBooksCount,
  dbCreateBooking,
  getCustomerBookings,
  editBooking,
  getReviews,
  getUserReviews,
  postReview,
};
