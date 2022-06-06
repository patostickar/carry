const { Customer, Review } = require('../db');

const getCustomers = async (req, res, next) => {
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
  if (!email) return res.status(400).send({ msg: 'el email es necesario' });
  try {
    const data = await Customer.findOne({ where: { email } });
    data ? res.send(data) : res.status(400).send({ msg: 'Customer not found' });
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
      ? res.status(201).send({ msg: 'Cliente creado', customer })
      : res.status(406).send('Ya existe un cliente con este correo');
  } catch (error) {
    next(error);
  }
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

const putCustomer = async (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).send('Por favor enviar ID del cliente');
  const {
    email,
    firstName,
    lastName,
    street,
    city,
    phone,
    postalCode,
    password,
    isAdmin,
    isPremium,
    isBanned,
  } = req.body;

  try {
    const customer = await Customer.findByPk(id);
    if (!customer) return res.status(400).send('No hay un cliente con ese id');

    await customer.update({
      email,
      firstName,
      lastName,
      street,
      city,
      phone,
      postalCode,
      password,
      isAdmin,
      isPremium,
      isBanned,
    });

    res.status(200).send({ msg: 'Información editada', customer });
  } catch (error) {
    next(error);
  }
};

const getReviews = async (req, res, next) => {
  try {
    // const {id1,id2,id3} =req.query
    const testimonios = [];
    const count = await Review.count();
    const Getrandom = () => {
      return Math.floor(Math.random() * (count - 1 + 1) + 1);
    };
    const id1 = Getrandom();
    let id2 = Getrandom();
    let id3 = Getrandom();
    if (id2 === id1) {
      id2 = Getrandom();
    }
    if (id3 === id1 || id3 === id2) {
      id3 = Getrandom();
    }
    testimonios.push(
      await Review.findOne({ where: { id: id1 }, include: [Customer] })
    );
    testimonios.push(
      await Review.findOne({ where: { id: id2 }, include: [Customer] })
    );
    testimonios.push(
      await Review.findOne({ where: { id: id3 }, include: [Customer] })
    );
    res.send(testimonios);
  } catch (error) {
    next(error);
  }
};

const postReview = async (req, res, next) => {
  const { id } = req.params;
  const { reviews } = req.body;
  try {
    const review = await Review.create({ review: reviews });
    const customer = await Customer.findOne({ where: { id } });
    review.setCustomer(customer);
    res.send('review Creada');
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getCustomers,
  getCustomerByemail,
  getReviews,
  postCustomer,
  postReview,
  putCustomer,
  // getCustomerById,
};
