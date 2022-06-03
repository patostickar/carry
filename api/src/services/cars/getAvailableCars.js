const { Car, Booking } = require('../../db');

module.exports.getAvailableCars = async (
  pickUpLocationId,
  pickUpDate,
  dropOffDate
) => {
  const carsInLocation = await Car.findAll({
    where: { locationId: pickUpLocationId },
  });

  const bookingsInLocation = await Booking.findAll({
    where: { pickUpLocationId },
  });

  pickUpDate = new Date(pickUpDate);
  dropOffDate = new Date(dropOffDate);

  const unavailableCarsPickup = bookingsInLocation
    .filter((b) => {
      const bookingPickUpDate = new Date(b.dataValues.pickUpDate);
      const bookingDropOffDate = new Date(b.dataValues.dropOffDate);
      return pickUpDate > bookingPickUpDate && pickUpDate < bookingDropOffDate;
    })
    .map((c) => c.dataValues.carId);

  const unavailableCarsDropOff = bookingsInLocation
    .filter((b) => {
      const bookingPickUpDate = new Date(b.dataValues.pickUpDate);
      const bookingDropOffDate = new Date(b.dataValues.dropOffDate);
      return (
        dropOffDate >= bookingPickUpDate && dropOffDate <= bookingDropOffDate
      );
    })
    .map((c) => c.dataValues.carId);

  const unavailableCarsId = Array.from(
    new Set([...unavailableCarsPickup, ...unavailableCarsDropOff])
  );

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
