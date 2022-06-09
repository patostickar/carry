const { findCarType } = require('../services/cartypes/findCarType');
const { carTypeCount } = require('../services/cartypes/carTypeCount');
const { Cartype } = require('../db');

const getCarType = async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await findCarType(id);
    if (!data)
      return res.status(400).send('No se encontró un tipo de auto con ese ID');
    res.send(data);
  } catch (error) {
    next(error);
  }
};

const createCartype = async (req, res, next) => {
  const {
    make,
    model,
  } = req.body;


  try {
    const [carType, created] = await Cartype.findOrCreate({
      where: req.body,
    });
    if (!created)
      return res
        .status(400)
        .send('Ya existe un modelo de auto de estas características');

    return res.status(201).send({ msg: `${make} ${model} creado`, carType });
  } catch (error) {
    next(error);
  }
};

const getCarTypeCount = async (req, res, next) => {
  const { locationId } = req.params;

  if (!locationId)
    return res.status(400).send('Se requiere enviar un ID de ubicación');

  try {
    const count = await carTypeCount(locationId);
    res.send(count);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCarType,
  getCarTypeCount,
  createCartype,
};
