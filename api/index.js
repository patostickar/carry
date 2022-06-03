const server = require('./src/app.js');
const fs = require('fs');
const { conn, Location, Customer, Cartype } = require('./src/db.js');
const { createCar } = require('./src/services/cars/createCar');

const { PORT } = process.env;

conn
  .sync({ force: false })
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
      postal_code: l.postal_code,
      geo: l.geo,
      phone: l.telephone,
      time_open: l.time_open,
      time_close: l.time_close,
      airport_location: l.airport_location,
      img: l.img,
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
      classCode: c.vehicle_classCode,
      className: c.vehicle_className,
      transmission: c.vehicle_transmission,
      mpg: c.mpg,
      img: c.image_url,
      doors: c.doors,
      seats: c.seats,
      airConditioning: c.air_conditioned,
      largeSuitcase: c.largeSuitcase,
      smallSuitcase: c.smallSuitcase,
      price: c.price,
    }));

    await Promise.all([
      Location.bulkCreate(locations, {
        ignoreDuplicates: true,
      }),
      Customer.bulkCreate(customers, {
        ignoreDuplicates: true,
      }),
      Cartype.bulkCreate(carTypes, {
        ignoreDuplicates: true,
      }),
    ]);

    const cordoba = await Location.findOne({
      where: { name: 'Córdoba Cars' },
    });
    const palermo = await Location.findOne({
      where: { name: 'Palermo Cars' },
    });
    const santiago = await Location.findOne({
      where: { name: 'Santiago Cars' },
    });
    const corrientes = await Location.findOne({
      where: { name: 'Corrientes Cars' },
    });
    const cartype1 = await Cartype.findOne({
      where: { make: 'Ford', model: 'Fiesta' },
    });
    const cartype2 = await Cartype.findOne({
      where: { make: 'Kia', model: 'Rio' },
    });
    const cartype3 = await Cartype.findOne({
      where: { make: 'Toyota', model: 'Corolla' },
    });
    const cartype4 = await Cartype.findOne({
      where: { make: 'Volkswagen', model: 'Jetta' },
    });
    const cartype5 = await Cartype.findOne({
      where: { make: 'Toyota', model: 'Camry' },
    });
    const cartype6 = await Cartype.findOne({
      where: { make: 'Volkswagen', model: 'Passat' },
    });
    const cartype7 = await Cartype.findOne({
      where: { make: 'Chrysler', model: '300' },
    });
    const cartype8 = await Cartype.findOne({
      where: { make: 'Ford', model: 'Mustang Convertible' },
    });
    const cartype9 = await Cartype.findOne({
      where: { make: 'Chrysler', model: 'Voyager' },
    });
    const cartype10 = await Cartype.findOne({
      where: { make: 'Ford', model: 'Edge' },
    });
    // const location1 = await Location.findOne({where:{name: "Ministro Pistarini International Airport"}})
    // const cartype1 = await Cartype.findOne({where:{make: "Chrysler"}})
    // const location2 = await Location.findOne({where:{name: "Palermo Cars"}})
    // const cartype2 = await Cartype.findOne({where:{make: "Volkswagen"}})

    await createCar(cordoba.id, cartype1.id);
    await createCar(cordoba.id, cartype1.id);
    await createCar(cordoba.id, cartype1.id);
    await createCar(cordoba.id, cartype2.id);
    await createCar(cordoba.id, cartype2.id);
    await createCar(cordoba.id, cartype3.id);
    await createCar(cordoba.id, cartype4.id);
    await createCar(cordoba.id, cartype5.id);
    await createCar(cordoba.id, cartype6.id);
    await createCar(cordoba.id, cartype7.id);
    await createCar(cordoba.id, cartype8.id);
    await createCar(cordoba.id, cartype9.id);
    await createCar(cordoba.id, cartype10.id);

    await createCar(palermo.id, cartype1.id);
    await createCar(palermo.id, cartype1.id);
    await createCar(palermo.id, cartype1.id);
    await createCar(palermo.id, cartype2.id);
    await createCar(palermo.id, cartype2.id);
    await createCar(palermo.id, cartype3.id);
    await createCar(palermo.id, cartype4.id);
    await createCar(palermo.id, cartype5.id);
    await createCar(palermo.id, cartype6.id);
    await createCar(palermo.id, cartype7.id);
    await createCar(palermo.id, cartype8.id);
    await createCar(palermo.id, cartype9.id);
    await createCar(palermo.id, cartype10.id);

    await createCar(santiago.id, cartype1.id);
    await createCar(santiago.id, cartype1.id);
    await createCar(santiago.id, cartype1.id);
    await createCar(santiago.id, cartype2.id);
    await createCar(santiago.id, cartype2.id);
    await createCar(santiago.id, cartype3.id);
    await createCar(santiago.id, cartype4.id);
    await createCar(santiago.id, cartype5.id);
    await createCar(santiago.id, cartype6.id);
    await createCar(santiago.id, cartype7.id);
    await createCar(santiago.id, cartype8.id);
    await createCar(santiago.id, cartype9.id);
    await createCar(santiago.id, cartype10.id);

    await createCar(corrientes.id, cartype1.id);
    await createCar(corrientes.id, cartype1.id);
    await createCar(corrientes.id, cartype1.id);
    await createCar(corrientes.id, cartype2.id);
    await createCar(corrientes.id, cartype2.id);
    await createCar(corrientes.id, cartype3.id);
    await createCar(corrientes.id, cartype4.id);
    await createCar(corrientes.id, cartype5.id);
    await createCar(corrientes.id, cartype6.id);
    await createCar(corrientes.id, cartype7.id);
    await createCar(corrientes.id, cartype8.id);
    await createCar(corrientes.id, cartype9.id);
    await createCar(corrientes.id, cartype10.id);

    console.log('Locations, Customers and CarTypes have been saved');
  })
  .catch((err) => console.log(err));
