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
  try {
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
      return res.status(201).send({ msg: 'Location created' });
    } else {
      return res
        .status(406)
        .send({ msg: 'There is already a location with this name', location });
    }
  } catch (error) {
    next(error);
  }
};

const getLocationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const { dataValues } = await Location.findByPk(id);
      dataValues
        ? res.status(200).send(dataValues)
        : res.send({ msg: 'Location not found by id' });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllLocations,
  createLocation,
  getLocationById,
};
