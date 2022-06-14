const server = require('./src/app.js');
const fs = require('fs');
const { conn, Location, Customer, Cartype } = require('./src/db.js');
const { addCar } = require('./src/services/cars/addCar');
const { PORT } = process.env;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`%s listening at ${PORT}`);
    });

    createData();

    // eslint-disable-next-line
    async function createData() {
      const bufferData = fs.readFileSync('./src/DB.json');
      const stData = bufferData.toString();
      const data = JSON.parse(stData);

      const locations = data.locations.map((l) => ({
        name: l.name,
        street: l.street,
        city: l.city,
        stateName: l.stateName,
        postalCode: l.postalCode,
        geo: l.geo,
        phone: l.telephone,
        timeOpen: l.timeOpen,
        timeClose: l.timeClose,
        airportLocation: l.airportLocation,
        img: l.img,
      }));

      // const customers = data.customers.map((c) => ({
      //   email: c.email,
      //   firstName: c.first_name,
      //   lastName: c.last_name,
      //   street: c.street,
      //   city: c.city,
      //   postalCode: c.postcal_code,
      //   phone: c.phone,
      //   password: c.password,
      // }));

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
        // Customer.bulkCreate(customers, {
        //   ignoreDuplicates: true,
        // }),

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
      const Ministro = await Location.findOne({
        where: { name: 'Ministro Pistarini International Airport' },
      });
      const aeroparque = await Location.findOne({
        where: { name: 'Aeroparque Internacional Jorge Newbery' },
      });
      const Mendoza = await Location.findOne({
        where: { name: 'Aeropuerto Internacional El Plumerillo - Mendoza' },
      });
      const SantaFe = await Location.findOne({
        where: { name: 'Santa Fe Cars' },
      });
      const Bariloche = await Location.findOne({
        where: { name: 'Aeropuerto Internacional de Bariloche Tte. Luis Candelaria' },
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

      await Promise.all([
        addCar(cordoba.id, cartype1.id),
        addCar(cordoba.id, cartype2.id),
        addCar(cordoba.id, cartype3.id),
        addCar(cordoba.id, cartype4.id),
        addCar(cordoba.id, cartype5.id),
        addCar(cordoba.id, cartype6.id),
        addCar(cordoba.id, cartype7.id),
        addCar(cordoba.id, cartype8.id),
        addCar(cordoba.id, cartype9.id),
        addCar(cordoba.id, cartype10.id),
        addCar(palermo.id, cartype1.id),
        addCar(palermo.id, cartype2.id),
        addCar(palermo.id, cartype3.id),
        addCar(palermo.id, cartype4.id),
        addCar(palermo.id, cartype5.id),
        addCar(palermo.id, cartype6.id),
        addCar(palermo.id, cartype7.id),
        addCar(palermo.id, cartype8.id),
        addCar(palermo.id, cartype9.id),
        addCar(palermo.id, cartype10.id),
        addCar(santiago.id, cartype1.id),
        addCar(santiago.id, cartype2.id),
        addCar(santiago.id, cartype3.id),
        addCar(santiago.id, cartype4.id),
        addCar(santiago.id, cartype5.id),
        addCar(santiago.id, cartype6.id),
        addCar(santiago.id, cartype7.id),
        addCar(santiago.id, cartype8.id),
        addCar(santiago.id, cartype9.id),
        addCar(santiago.id, cartype10.id),
        addCar(corrientes.id, cartype1.id),
        addCar(corrientes.id, cartype2.id),
        addCar(corrientes.id, cartype3.id),
        addCar(corrientes.id, cartype4.id),
        addCar(corrientes.id, cartype5.id),
        addCar(corrientes.id, cartype6.id),
        addCar(corrientes.id, cartype7.id),
        addCar(corrientes.id, cartype8.id),
        addCar(corrientes.id, cartype9.id),
        addCar(corrientes.id, cartype10.id),
        addCar(Ministro.id, cartype1.id),
        addCar(Ministro.id, cartype2.id),
        addCar(Ministro.id, cartype3.id),
        addCar(Ministro.id, cartype4.id),
        addCar(Ministro.id, cartype5.id),
        addCar(Ministro.id, cartype6.id),
        addCar(Ministro.id, cartype7.id),
        addCar(Ministro.id, cartype8.id),
        addCar(Ministro.id, cartype9.id),
        addCar(Ministro.id, cartype10.id),
        addCar(aeroparque.id, cartype1.id),
        addCar(aeroparque.id, cartype2.id),
        addCar(aeroparque.id, cartype3.id),
        addCar(aeroparque.id, cartype4.id),
        addCar(aeroparque.id, cartype5.id),
        addCar(aeroparque.id, cartype6.id),
        addCar(aeroparque.id, cartype7.id),
        addCar(aeroparque.id, cartype8.id),
        addCar(aeroparque.id, cartype9.id),
        addCar(aeroparque.id, cartype10.id),
        addCar(Mendoza.id, cartype1.id),
        addCar(Mendoza.id, cartype2.id),
        addCar(Mendoza.id, cartype3.id),
        addCar(Mendoza.id, cartype4.id),
        addCar(Mendoza.id, cartype5.id),
        addCar(Mendoza.id, cartype6.id),
        addCar(Mendoza.id, cartype7.id),
        addCar(Mendoza.id, cartype8.id),
        addCar(Mendoza.id, cartype9.id),
        addCar(Mendoza.id, cartype10.id),
        addCar(SantaFe.id, cartype1.id),
        addCar(SantaFe.id, cartype2.id),
        addCar(SantaFe.id, cartype3.id),
        addCar(SantaFe.id, cartype4.id),
        addCar(SantaFe.id, cartype5.id),
        addCar(SantaFe.id, cartype6.id),
        addCar(SantaFe.id, cartype7.id),
        addCar(SantaFe.id, cartype8.id),
        addCar(SantaFe.id, cartype9.id),
        addCar(SantaFe.id, cartype10.id),
        addCar(Bariloche.id, cartype1.id),
        addCar(Bariloche.id, cartype2.id),
        addCar(Bariloche.id, cartype3.id),
        addCar(Bariloche.id, cartype4.id),
        addCar(Bariloche.id, cartype5.id),
        addCar(Bariloche.id, cartype6.id),
        addCar(Bariloche.id, cartype7.id),
        addCar(Bariloche.id, cartype8.id),
        addCar(Bariloche.id, cartype9.id),
        addCar(Bariloche.id, cartype10.id),
      ]);

      console.log('Locations, Customers, Cartypes and Cars created');
    }
  })
  .catch((err) => console.log(err));
