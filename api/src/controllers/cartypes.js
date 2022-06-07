const { getCarType } = require('../services/cartypes/getCarType');
const { carTypeCount } = require('../services/cartypes/carTypeCount');
const { Cartype } = require('../db');

const getType = async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await getCarType(id);
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

  if (
    !make ||
    !model ||
    !className ||
    !transmission ||
    !mpg ||
    !img ||
    !doors ||
    !seats ||
    !airConditioning ||
    !largeSuitcase ||
    !smallSuitcase ||
    !price
  )
    return res
      .status(400)
      .send('Se requiere enviar todos los parámetros para crear un auto');

  try {
    const [, created] = await Cartype.findOrCreate({
      where: req.body,
    });
    if (!created)
      return res
        .status(200)
        .send('Ya existe un modelo de auto de estas características');

    return res.status(201).send(`${make} ${model} creado`);
  } catch (error) {
    next(error);
  }
};

const getTypeCount = async (req, res, next) => {
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
  getType,
  getTypeCount,
  createCartype,
};
