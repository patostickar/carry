const { Cartype, Car } = require('../db');

const getTypeDB = async (id) => {
  if (id) {
    return await Cartype.findOne({ where: { id } });
  }
  const types = await Cartype.findAll();
  return types;
};
const cartypecount = async (locationId) => {
  return await Car.count({
    attributes: ['cartypeId'],
    where: { locationId },
    group: 'cartypeId',
  });
};

// const cartypecounTEST = async (req, res, next) => {
//   const { locationId } = req.params;
//   const counts = await Car.count({
//     attributes: ['cartypeId'],
//     where: { locationId },
//     group: 'cartypeId',
//   });
//   const data = await Promise.all(
//     counts.map(async (count) => {
//       const findcartype = await getTypeDB(count.cartypeId);
//       return { ...count, cartype: findcartype };
//     })
//   );
//   res.send(data);
// };

module.exports = {
  getTypeDB,
  cartypecount,
};
