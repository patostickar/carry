// const carTypeCountEST = async (req, res, next) => {
//   const { locationId } = req.params;
//   const counts = await Car.count({
//     attributes: ['cartypeId'],
//     where: { locationId },
//     group: 'cartypeId',
//   });
//   const data = await Promise.all(
//     counts.map(async (count) => {
//       const findcartype = await getCarType(count.cartypeId);
//       return { ...count, cartype: findcartype };
//     })
//   );
//   res.send(data);
// };
