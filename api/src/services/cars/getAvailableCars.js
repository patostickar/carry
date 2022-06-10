const { Car, Booking } = require('../../db');

module.exports.getAvailableCars = async (
  locationId,
  pickUpDate,
  dropOffDate
) => {
  const carsInLocation = await Car.findAll({
    where: { locationId },
  });

  const bookingsInLocation = await Booking.findAll({
    where: { locationId },
  });

  // A simple condition to find out if two segments [a, b] and [c, d] intersect each other
  // is(a - d) * (b - c) <= 0. It covers all the situations, when one date range(segment)
  // only starts or only ends during the other and also when one of them is completely included into the other.

  pickUpDate = new Date(pickUpDate).getTime();
  dropOffDate = new Date(dropOffDate).getTime();

  const unavailableCars = bookingsInLocation
    .filter((b) => {
      const bookingPickUpDate = new Date(b.dataValues.pickUpDate).getTime();
      const bookingDropOffDate = new Date(b.dataValues.dropOffDate).getTime();

      return (
        (pickUpDate - bookingDropOffDate) * (dropOffDate - bookingPickUpDate) <=
        0
      );
    })
    .map((c) => c.dataValues.carId);

  const unavailableCarsId = Array.from(new Set(unavailableCars));

  const availableCars = carsInLocation.filter(
    (c) => !unavailableCarsId.includes(c.dataValues.id)
  );

  // const availableCarsId = availableCars.map((c) => c.dataValues.id);

  // console.log('Cars in location: ', carsInLocation.length);
  // console.log('Unavailable cars: ', unavailableCarsId.length);
  // console.log('Unavailable cars id: ', unavailableCarsId);
  // console.log('Available cars: ', availableCars.length);
  // console.log('Available cars id: ', availableCarsId);

  return availableCars;
};
