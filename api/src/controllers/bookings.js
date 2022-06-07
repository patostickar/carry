const { Booking } = require('../db');
const { createBooking } = require('../services/bookings/createBooking');
const { getBookings } = require('../services/bookings/getBookings');
const { searchBooking } = require('../services/bookings/getCustomerBookings');

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
  const { carTypeId, customerId, locationId, pickUpDate, dropOffDate } =
    req.body;

  if (!carTypeId || !customerId || !locationId || !pickUpDate || !dropOffDate)
    return res.status(400).send('Se requiere enviar todos los parámetros');

  if (new Date(dropOffDate) <= new Date(pickUpDate)) {
    return res.status(400).send('La reserva mínima es de 24hs');
  }

  if (new Date(pickUpDate) < new Date()) {
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

module.exports = {
  getAllBookings,
  dbCreateBooking,
  getCustomerBookings,
  editBooking,
};
