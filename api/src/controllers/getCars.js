const { getCarsApi } = require('../services/getCars');

module.exports.getCars = async (req, res, next) => {
  try {
    const cars = await getCarsApi();
    if (!cars.length) return res.send('no cars ☹️');
   console.log(cars)
    res.status(200).json({msg:'Successfull test', cars});
  } catch (error) {
    next(error);
  }
};
