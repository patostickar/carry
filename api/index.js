const server = require('./src/app.js');
const fs = require('fs');
const { conn, Location, Customer, Cartype } = require('./src/db.js');
const { PORT } = process.env;

conn
  .sync({ force: true })
  .then(async () => {
    server.listen(PORT, () => {
      console.log('%s listening at 3001');
    });

    const bufferData = fs.readFileSync('./src/DB.json');
    const stData = bufferData.toString();
    const data = JSON.parse(stData);

    const locations = data.locations.map((l) => ({
      name: l.name,
      street: l.street,
      city: l.city,
      state_name: l.state_name,
      postal_code: l.postcal_code,
      geo: l.geo,
      phone: l.telephone,
      time_open: l.time_open,
      time_close: l.time_close,
      airport_location: l.airport_location,
    }));

   
    const customers = data.customers.map((c) => ({
      email: c.email,
      first_name: c.first_name,
      last_name: c.last_name,
      street: c.street,
      city: c.city,
      postal_code: c.postcal_code,
      phone: c.phone,
      password: c.password,
    }));

    const carTypes = data.car_types.map((c) => ({
      make: c.make,
      model: c.model,
      class_code: c.vehicle_class_code,
      class_name: c.vehicle_class_name,
      transmission: c.vehicle_transmission,
      mpg: c.mpg,
      img: c.image_url,
      doors: c.doors,
      seats: c.seats,
      air_conditioning: c.air_conditioned,
      large_suitcase: c.large_suitcase,
      small_suitcase: c.small_suitcase,
    }));

    await Promise.all([
      Location.bulkCreate(locations),
      Customer.bulkCreate(customers),
      Cartype.bulkCreate(carTypes),
    ]);

    console.log('Locations, Customers and CarTypes have been saved');
  })
  .catch((err) => console.log(err));
