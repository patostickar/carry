const server = require('./src/app.js');
const fs = require('fs');
const { conn, Location, Customer, Cartype, Review } = require('./src/db.js');
const { addCar } = require('./src/services/cars/addCar');
const { PORT } = process.env;

conn
  .sync({ force: false })
  .then(async () => {
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`);
    });

    // const bufferData = fs.readFileSync('./src/DB.json');
    // const stData = bufferData.toString();
    // const data = JSON.parse(stData);

    // const locations = data.locations.map((l) => ({
    //   name: l.name,
    //   street: l.street,
    //   city: l.city,
    //   stateName: l.stateName,
    //   postalCode: l.postalCode,
    //   geo: l.geo,
    //   phone: l.telephone,
    //   timeOpen: l.timeOpen,
    //   timeClose: l.timeClose,
    //   airportLocation: l.airportLocation,
    //   img: l.img,
    // }));


    // const carTypes = data.car_types.map((c) => ({
    //   make: c.make,
    //   model: c.model,
    //   classCode: c.vehicle_classCode,
    //   className: c.vehicle_className,
    //   transmission: c.vehicle_transmission,
    //   mpg: c.mpg,
    //   img: c.image_url,
    //   doors: c.doors,
    //   seats: c.seats,
    //   airConditioning: c.air_conditioned,
    //   largeSuitcase: c.largeSuitcase,
    //   smallSuitcase: c.smallSuitcase,
    //   price: c.price,
    // }));

    // await Promise.all([
    //   Location.bulkCreate(locations, {
    //     ignoreDuplicates: true,
    //   }),

    //   Cartype.bulkCreate(carTypes, {
    //     ignoreDuplicates: true,
    //   }),
    // ]);


    // const cordoba = await Location.findOne({
    //   where: { name: 'Córdoba Cars' },
    // });
    // const palermo = await Location.findOne({
    //   where: { name: 'Palermo Cars' },
    // });
    // const santiago = await Location.findOne({
    //   where: { name: 'Santiago Cars' },
    // });
    // const corrientes = await Location.findOne({
    //   where: { name: 'Corrientes Cars' },
    // });

    // const cartype1 = await Cartype.findOne({
    //   where: { make: 'Ford', model: 'Fiesta' },
    // });
    // const cartype2 = await Cartype.findOne({
    //   where: { make: 'Kia', model: 'Rio' },
    // });
    // const cartype3 = await Cartype.findOne({
    //   where: { make: 'Toyota', model: 'Corolla' },
    // });
    // const cartype4 = await Cartype.findOne({
    //   where: { make: 'Volkswagen', model: 'Jetta' },
    // });
    // const cartype5 = await Cartype.findOne({
    //   where: { make: 'Toyota', model: 'Camry' },
    // });
    // const cartype6 = await Cartype.findOne({
    //   where: { make: 'Volkswagen', model: 'Passat' },
    // });
    // const cartype7 = await Cartype.findOne({
    //   where: { make: 'Chrysler', model: '300' },
    // });
    // const cartype8 = await Cartype.findOne({
    //   where: { make: 'Ford', model: 'Mustang Convertible' },
    // });
    // const cartype9 = await Cartype.findOne({
    //   where: { make: 'Chrysler', model: 'Voyager' },
    // });
    // const cartype10 = await Cartype.findOne({
    //   where: { make: 'Ford', model: 'Edge' },
    // });

    // await addCar(cordoba.id, cartype1.id);
    // await addCar(cordoba.id, cartype1.id);
    // await addCar(cordoba.id, cartype1.id);
    // await addCar(cordoba.id, cartype2.id);
    // await addCar(cordoba.id, cartype2.id);
    // await addCar(cordoba.id, cartype3.id);
    // await addCar(cordoba.id, cartype4.id);
    // await addCar(cordoba.id, cartype5.id);
    // await addCar(cordoba.id, cartype6.id);
    // await addCar(cordoba.id, cartype7.id);
    // await addCar(cordoba.id, cartype8.id);
    // await addCar(cordoba.id, cartype9.id);
    // await addCar(cordoba.id, cartype10.id);

    // await addCar(palermo.id, cartype1.id);
    // await addCar(palermo.id, cartype1.id);
    // await addCar(palermo.id, cartype1.id);
    // await addCar(palermo.id, cartype2.id);
    // await addCar(palermo.id, cartype2.id);
    // await addCar(palermo.id, cartype3.id);
    // await addCar(palermo.id, cartype4.id);
    // await addCar(palermo.id, cartype5.id);
    // await addCar(palermo.id, cartype6.id);
    // await addCar(palermo.id, cartype7.id);
    // await addCar(palermo.id, cartype8.id);
    // await addCar(palermo.id, cartype9.id);
    // await addCar(palermo.id, cartype10.id);

    // await addCar(santiago.id, cartype1.id);
    // await addCar(santiago.id, cartype1.id);
    // await addCar(santiago.id, cartype1.id);
    // await addCar(santiago.id, cartype2.id);
    // await addCar(santiago.id, cartype2.id);
    // await addCar(santiago.id, cartype3.id);
    // await addCar(santiago.id, cartype4.id);
    // await addCar(santiago.id, cartype5.id);
    // await addCar(santiago.id, cartype6.id);
    // await addCar(santiago.id, cartype7.id);
    // await addCar(santiago.id, cartype8.id);
    // await addCar(santiago.id, cartype9.id);
    // await addCar(santiago.id, cartype10.id);

    // await addCar(corrientes.id, cartype1.id);
    // await addCar(corrientes.id, cartype1.id);
    // await addCar(corrientes.id, cartype1.id);
    // await addCar(corrientes.id, cartype2.id);
    // await addCar(corrientes.id, cartype2.id);
    // await addCar(corrientes.id, cartype3.id);
    // await addCar(corrientes.id, cartype4.id);
    // await addCar(corrientes.id, cartype5.id);
    // await addCar(corrientes.id, cartype6.id);
    // await addCar(corrientes.id, cartype7.id);
    // await addCar(corrientes.id, cartype8.id);
    // await addCar(corrientes.id, cartype9.id);
    // await addCar(corrientes.id, cartype10.id);

    // console.log('Locations, Customers, Cartypes and Cars created');
  })
  .catch((err) => console.log(err));
