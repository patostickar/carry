const { Booking, Review, Cartype } = require('../../db');
const { Op } = require('sequelize');

async function userReviewsDetail(id) {
  const booking = await Booking.findAll({
    where: { customerId: id, status: { [Op.ne]: 'cancelada' } },
    include: [Review, Cartype],
  });

  function formatBookingReview(r) {
    r = r?.dataValues;
    return {
      bookingId: r?.id,
      pickUpDate: r?.pickUpDate,
      dropOffDate: r?.dropOffDate,
      review: r?.review?.review || null,
      cartype: r?.cartype,
    };
  }

  return booking.map((b) => formatBookingReview(b));
}

module.exports = { userReviewsDetail };
