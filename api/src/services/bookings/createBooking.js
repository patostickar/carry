const { Booking, Car, Location, Customer } = require('../../db');

module.exports.createBooking = async (req) => {
  const {
    carid,
    customerid,
    locationStart,
    locationEnd,
    returnDate,
    pickupDate,
    reservationTotal,
    Status,
  } = req.body;
  if (
    carid &&
    customerid &&
    locationStart &&
    locationEnd &&
    returnDate &&
    pickupDate &&
    reservationTotal &&
    Status
  ) {
    if (pickupDate === returnDate || returnDate < pickupDate) {
      return 'Deben ser diferentes fechas para generar la reserva y la fecha de retorno no puede ser menor a la fecha inicio ';
    }

    const customer = await Customer.findOne({ where: { id: customerid } });
    const car = await Car.findOne({ where: { id: carid } });
    const lstart = await Location.findOne({ where: { id: locationStart } });
    const lend = await Location.findOne({ where: { id: locationEnd } });
    const { dataValues } = car;

    const [booking, created] = await Booking.findOrCreate({
      where: {
        carId: carid,
        pickupDate,
        returnDate,
      },
      defaults: {
        Status,
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
      return 'Location start not found';
    }
    if (lend) {
      booking.setDropoffLocation(lend);
    } else {
      return 'Location end not found';
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
