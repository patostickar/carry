const { Customer } = require('../db');

const getCustomers = async (req, res, next) => {
  try {
    const response = await Customer.findAll();
    const data = response.map?.((res) => res.dataValues);
    res.send(data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send({ msg: error.response.status });
    } else if (error.request) {
      next(error.request);
    } else {
      next(error);
    }
  }
};

const postCustomer = async (req, res, next) => {
  try {
    const {
      email,
      first_name,
      last_name,
      street,
      city,
      phone,
      postal_code,
      password,
      isAdmin,
      isPremium,
      isBanned,
    } = req.body;
    const [customer, created] = await Customer.findOrCreate({
      where: {
        email,
        first_name,
        last_name,
        street,
        city,
        phone,
        postal_code,
        password,
        isAdmin,
        isPremium,
        isBanned,
      },
    });
    if (created) {
      return res.status(201).send({ msg: 'Customer created' });
    } else {
      return res
        .status(406)
        .send({ msg: 'There is already a customer with this name', customer });
    }
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send({ msg: error.response.status });
    } else if (error.request) {
      next(error.request);
    } else {
      next(error);
    }
  }
};

const getCustomerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (id) {
      const data = await Customer.findByPk(id);
      data
        ? res.status(200).send(data)
        : res.send({ msg: 'Customer not found by id' });
    } else {
      res.send({ msg: 'Customer not found' });
    }
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send({ msg: error.response.status });
    } else if (error.request) {
      next(error.request);
    } else {
      next(error);
    }
  }
};

const putCustomer = async (req, res, next) => {
  try {
    const {
      email,
      first_name,
      last_name,
      street,
      city,
      phone,
      postal_code,
      password,
      isAdmin,
      isPremium,
      isBanned,
    } = req.body;
    const { id } = req.params;
    if (id) {
      const data = await Customer.findOne({ where: { id } });
      if (data) {
        await data.update({
          email,
          first_name,
          last_name,
          street,
          city,
          phone,
          postal_code,
          password,
          isAdmin,
          isPremium,
          isBanned,
        });
      }
      data
        ? res.status(200).send({ msg: 'Customer edited', data })
        : res.send({ msg: 'Customer not found' });
    } else {
      res.send({ msg: 'Customer not found' });
    }
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).send({ msg: error.response.status });
    } else if (error.request) {
      next(error.request);
    } else {
      next(error);
    }
  }
};

module.exports = {
  getCustomers,
  postCustomer,
  getCustomerById,
  putCustomer,
};
