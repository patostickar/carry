import Steps from '../steps';
import CarDetailCard from '../carDetailCard';
import CarTypeTopFilter from '../TopBar/TopBar';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

function ListResult() {
  const {
    carTypes,
    filters: { transmission, carCategory, airConditioning, fourPlusSeats },
  } = useSelector((state) => state.carsResults);

  const categories = [];
  for (const category in carCategory) {
    if (carCategory[category]) {
      categories.push(category);
    }
  }

  const transmissionOptions = [];
  for (const option in transmission) {
    if (transmission[option]) {
      transmissionOptions.push(option);
    }
  }
  return (
    <div className='listResult'>
      <Steps />
      <div className='listTitle'>
        <h1>Bogotá: 65 cars available</h1>
      </div>
      <CarTypeTopFilter />
      <AnimatePresence>
        {carTypes
          .filter((carType) =>
            transmissionOptions.length
              ? transmissionOptions.includes(carType.transmission.toLowerCase())
              : true
          )
          .filter((carType) =>
            airConditioning ? carType.air_conditioning : true
          )
          .filter((carType) => {
            return fourPlusSeats ? carType.seats >= 4 : true;
          })
          .filter((carType) =>
            categories.length
              ? categories.includes(carType.class_name.toLowerCase())
              : true
          )
          .map((carType) => (
            <CarDetailCard cartype={carType} key={carType.id} />
          ))}
      </AnimatePresence>
    </div>
  );
}

export default ListResult;
