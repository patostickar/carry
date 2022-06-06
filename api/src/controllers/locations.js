const { Op } = require('sequelize');
const { Location } = require('../db');

const getLocations = async (req, res, next) => {
  try {
    const { name } = req.query;
    if (name) {
      const { dataValues } = await Location.findOne({
        where: {
          name: {
            [Op.iLike]: `${name}`,
          },
        },
      });
      dataValues
        ? res.status(200).send(dataValues)
        : res.send({ msg: 'Location not found by name' });
    } else {
      const data = await Location.findAll();
      const dataDB = data.map?.((res) => res.dataValues);
      res.send(dataDB);
    }
  } catch (error) {
    next(error);
  }
};

const postLocations = async (req, res, next) => {
  try {
    const {
      name,
      street,
      city,
      state_name,
      postal_code,
      lat,
      lon,
      phone,
      time_open,
      time_close,
      airport_location,
    } = req.body;
    const geo = [lat, lon];
    const [location, created] = await Location.findOrCreate({
      where: {
        name,
        street,
        city,
        state_name,
        postal_code,
        geo,
        phone: String(phone),
        time_open,
        time_close,
        airport_location,
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
  getLocations,
  postLocations,
  getLocationById,
};
