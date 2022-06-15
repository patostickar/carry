const { Customer } = require('../db');

const getCustomers = async (_req, res, next) => {
  try {
    const customers = await Customer.findAll();
    if (!customers) res.send('No hay ningún cliente registrado');
    res.send(customers);
  } catch (error) {
    next(error);
  }
};

const getCustomerByemail = async (req, res, next) => {
  const { email } = req.params;
  if (!email) return res.status(400).send('El email es requerido');
  try {
    const data = await Customer.findOne({ where: { email } });
    data
      ? res.send(data)
      : res.status(400).send('Cliente no encontrado con ese email');
  } catch (error) {
    next(error);
  }
};

const postCustomer = async (req, res, next) => {
  const {
    email,
    given_name: firstName,
    family_name: lastName,
    picture,
  } = req.body;

  if (!email)
    return res.status(400).send('Se require un email para pder registrarse');

  try {
    const [customer, created] = await Customer.findOrCreate({
      where: {
        email,
      },
      defaults: {
        firstName,
        lastName,
        img: picture,
      },
    });

    created
      ? res.header('Authorization', customer.token).status(201).send({
          msg: 'Cliente registrado satisfactoriamente',
          customer,
        })
      : res
          .header('Authorization', customer.token)
          .send({ msg: 'Bienvenido de vuelta a Carry', customer });
  } catch (error) {
    next(error);
  }
};

const putCustomer = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).send('Por favor enviar ID del cliente');

  // const {
  //   email,
  //   firstName,
  //   lastName,
  //   street,
  //   city,
  //   phone,
  //   postalCode,
  //   password,
  //   isAdmin,
  //   isPremium,
  //   isBanned,
  // } = req.body;

  // Validaciones de los datos

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) return res.status(400).send('No hay un cliente con ese id');
    await customer.update(req.body);
    res.status(200).send({ msg: 'Información actualizada', customer });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCustomers,
  getCustomerByemail,
  postCustomer,
  putCustomer,
};

// const getCustomerById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     if (id) {
//       const data = await Customer.findByPk(id);
//       data
//         ? res.status(200).send(data)
//         : res.send({ msg: 'Customer not found by id' });
//     } else {
//       res.send({ msg: 'Customer not found' });
//     }
//   } catch (error) {
//     if (error.response) {
//       res.status(error.response.status).send({ msg: error.response.status });
//     } else if (error.request) {
//       next(error.request);
//     } else {
//       next(error);
//     }
//   }
// };
