const { Review, Customer, Booking } = require('../../db');

module.exports.randomReviews = async () => {
  const count = await Review.count();

  const uniqueIds = new Set();
  const reviewsToShow = count < 3 ? count : 3;

  while (uniqueIds.size !== reviewsToShow) {
    uniqueIds.add(Math.floor(Math.random() * count) + 1);
  }

  const idArray = Array.from(uniqueIds);

  let r1 = Review.findByPk(idArray[0], {
    include: [{ model: Booking, include: [Customer] }],
  });
  let r2 = Review.findByPk(idArray[1], {
    include: [{ model: Booking, include: [Customer] }],
  });
  let r3 = Review.findByPk(idArray[2], {
    include: [{ model: Booking, include: [Customer] }],
  });

  [r1, r2, r3] = await Promise.all([r1, r2, r3]);

  function formatReviewReponse(r) {
    r = r?.dataValues;
    return {
      review: r?.review,
      customer: {
        firstName: r?.booking?.customer.firstName,
        lastName: r?.booking?.customer.lastName,
        img: r?.booking?.customer.img,
      },
    };
  }

  return [
    formatReviewReponse(r1),
    formatReviewReponse(r2),
    formatReviewReponse(r3),
  ];
};
