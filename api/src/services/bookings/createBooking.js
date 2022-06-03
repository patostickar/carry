const { Booking, Car, Location, Customer } = require('../../db');

module.exports.createBooking = async (req) => {
  const {
    carId,
    customerId,
    pickUpLocation,
    dropOffLocation,
    dropOffDate,
    pickUpDate,
    reservationTotal,
    status,
  } = req.body;
  if (
    carId &&
    customerId &&
    pickUpLocation &&
    dropOffLocation &&
    dropOffDate &&
    pickUpDate &&
    reservationTotal &&
    status
  ) {
    if (pickUpDate === dropOffDate || dropOffDate < pickUpDate) {
      return 'Deben ser diferentes fechas para generar la reserva y la fecha de retorno no puede ser menor a la fecha inicio ';
    }

    const customer = await Customer.findOne({ where: { id: customerId } });
    const car = await Car.findOne({ where: { id: carId } });
    const lstart = await Location.findOne({ where: { id: pickUpLocation } });
    const lend = await Location.findOne({ where: { id: dropOffLocation } });
    const { dataValues } = car;

    const [booking, created] = await Booking.findOrCreate({
      where: {
        carId,
        pickUpDate,
        dropOffDate,
      },
      defaults: {
        status,
        reservationTotal,
        locationId: dataValues.locationId,
      },
    });

    if (customer) {
      booking.setCustomer(customer);
    } else {
      return 'Customer not found';
    }
    if (car) {
      booking.setCar(car);
    } else {
      return 'Car not found';
    }
    if (lstart) {
      booking.setPickupLocation(lstart);
    } else {
      return 'Pick Up Location not found';
    }
    if (lend) {
      booking.setDropoffLocation(lend);
    } else {
      return 'Drop Off Location not found';
    }

    if (created) {
      return 'Booking created';
    } else {
      return 'El car ya se encuentra reservado';
    }
  } else {
    return 'Incomplete data';
  }
};
