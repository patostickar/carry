const { getCarType } = require('../services/cartypes/getCarType');
const { carTypeCount } = require('../services/cartypes/carTypeCount');
const { Cartype } = require('../db');

const getType = async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await getCarType(id);
    if (!data) return res.send('No hay tipos de auto');
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const createCartype = async (req, res, next) => {
  // const {
  //   make,
  //   model,
  //   className,
  //   transmission,
  //   mpg,
  //   img,
  //   doors,
  //   seats,
  //   airConditioning,
  //   largeSuitcase,
  //   smallSuitcase,
  //   price,
  // } = req.body;

  // Validaciones

  try {
    const [cartype, created] = await Cartype.findOrCreate({
      where: req.body,
    });
    if (created) {
      return res.status(201).send({ msg: 'Tipo de auto creado' });
    } else {
      return res.status(200).send({
        msg: 'Ya existe un modelo de auto de estas características',
        cartype,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getTypeConunt = async (req, res, next) => {
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
  getTypeConunt,
  createCartype,
};
