const { getTypeDB, cartypecount } = require('../services/cartypeService');
const { Cartype } = require('../db');
const getType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getTypeDB(id);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
const createCartype = async (req, res, next) => {
  try {
    // eslint-disable-next-line camelcase
    const {
      make,
      model,
      classCode,
      className,
      transmission,
      mpg,
      img,
      doors,
      seats,
      airConditioning,
      largeSuitcase,
      smallSuitcase,
      Price,
    } = req.body;
    const [cartype, created] = await Cartype.findOrCreate({
      where: {
        // eslint-disable-next-line camelcase
        make,
        model,
        classCode,
        className,
        // eslint-disable-next-line camelcase
        transmission,
        mpg,
        img,
        doors,
        seats,
        airConditioning,
        // eslint-disable-next-line camelcase
        largeSuitcase,
        smallSuitcase,
        Price,
      },
    });
    if (created) {
      return res.status(201).send({ msg: 'cartype created' });
    } else {
      return res
        .status(406)
        .send({ msg: 'There is already a cartype with this name', cartype });
    }
  } catch (error) {
    next(error);
  }
};
const GetTypeConunt = async (req, res, next) => {
  const { locationId } = req.params;
  try {
    const count = await cartypecount(locationId);
    res.send(count);
  } catch (err) {
    next(err);
  }
};
module.exports = {
  getType,
  GetTypeConunt,
  createCartype,
};
