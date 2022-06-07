const { Review, Customer } = require('../../db');

module.exports.randomReviews = async () => {
  const count = await Review.count();

  const uniqueIds = new Set();
  const reviewsToShow = count < 3 ? count : 3;

  while (uniqueIds.size !== reviewsToShow) {
    uniqueIds.add(Math.floor(Math.random() * count) + 1);
  }

  const idArray = Array.from(uniqueIds);

  let r1 = Review.findByPk(idArray[0], { include: [Customer] });
  let r2 = Review.findByPk(idArray[1], { include: [Customer] });
  let r3 = Review.findByPk(idArray[2], { include: [Customer] });

  return ([r1, r2, r3] = await Promise.all([r1, r2, r3]));
};
