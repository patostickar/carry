const { getCars } = require('../services/getCars');

module.exports.getCars = async (req, res, next) => {
  try {
    const cars = await getCars();
    if (!cars.length) return res.send('no cars ☹️');

    res.json(cars);
  } catch (error) {
    next(error);
  }
};
