const { Location } = require('../db');

const getAllLocations = async (req, res, next) => {
  try {
    const locations = await Location.findAll();
    res.send(locations);
  } catch (error) {
    next(error);
  }
};

const createLocation = async (req, res, next) => {
  const {
    name,
    street,
    city,
    stateName,
    postalCode,
    lat,
    lon,
    phone,
    timeOpen,
    timeClose,
    airportLocation,
  } = req.body;

  if (
    !name ||
    !street ||
    !city ||
    !stateName ||
    !postalCode ||
    !lat ||
    !lon ||
    !phone ||
    !timeOpen ||
    !timeClose ||
    !airportLocation
  )
    return res.status(400).send('Se requiere enviar todos los parámetros');

  try {
    const geo = [lat, lon];

    const [location, created] = await Location.findOrCreate({
      where: {
        name,
        street,
        city,
        stateName,
        postalCode,
        geo,
        phone: String(phone),
        timeOpen,
        timeClose,
        airportLocation,
      },
    });
    if (created) {
      return res.status(201).send({ msg: 'Ubicación creada', location });
    } else {
      return res
        .status(200)
        .send('Ya existe una ubicación con estos parámetros');
    }
  } catch (error) {
    next(error);
  }
};

const getLocationById = async (req, res, next) => {
  const { id } = req.params;
  if (!id)
    return res.status(400).send('Se requiere enviar el ID de la ubicación');

  try {
    const location = await Location.findByPk(id);
    if (!location)
      return res.status(400).send('No se encuentra una ubicación con ese ID');
    res.send(location);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLocations,
  createLocation,
  getLocationById,
};
