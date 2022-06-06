const { getCarType } = require('../services/cartypes/getCarType');
const { carTypeCount } = require('../services/cartypes/carTypeCount');
const { Cartype } = require('../db');

const getType = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getCarType(id);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
const createCartype = async (req, res, next) => {
  try {
    const {
      make,
      model,
      className,
      transmission,
      mpg,
      img,
      doors,
      seats,
      airConditioning,
      largeSuitcase,
      smallSuitcase,
      price,
    } = req.body;
    const [cartype, created] = await Cartype.findOrCreate({
      where: {
        make,
        model,
        className,
        transmission,
        mpg,
        img,
        doors,
        seats,
        airConditioning,
        largeSuitcase,
        smallSuitcase,
        price,
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
    const count = await carTypeCount(locationId);
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
