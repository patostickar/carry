import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import Steps from './steps';
import CarCategoryTopBar from '../TopBar/CarCategoryTopBar';
import SortByPrice from '../TopBar/sortByPrice';
import CarDetailCard from './carDetailCard';
import LinearIndeterminate from '../../GeneralFuntions/LinearIndeterminate';
import styles from './styles/ListResult.module.css';

function ListResult() {
  const {
    carTypes,
    sort,
    filters: {
      transmission,
      carCategory,
      airConditioning,
      fourPlusSeats,
      carMakes,
    },
  } = useSelector((state) => state.carsResults);

  const { pickupLocation } = useSelector((state) => state.searchBar);

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
    <div className={styles.listResult}>
      <div className={styles.listTitle}>
        <h1>
          {pickupLocation?.name}: {carTypes.length} autos disponibles
        </h1>
      </div>
      <Steps />
      <CarCategoryTopBar />
      <SortByPrice />
      <AnimatePresence>
        {!carTypes.length ? (
          <LinearIndeterminate />
        ) : (
          carTypes
            .filter((carType) =>
              transmissionOptions.length
                ? transmissionOptions.includes(
                    carType.transmission.toLowerCase()
                  )
                : true
            )
            .filter((carType) =>
              airConditioning ? carType.airConditioning : true
            )
            .filter((carType) => {
              return fourPlusSeats ? carType.seats >= 4 : true;
            })
            .filter((carType) =>
              categories.length
                ? categories.includes(carType.className.toLowerCase())
                : true
            )
            .filter((carType) =>
              carMakes.length ? carMakes.includes(carType.make) : true
            )
            .sort((a, b) => {
              return sort.length
                ? sort === 'asc'
                  ? a.price - b.price
                  : b.price - a.price
                : null;
            })
            .map((carType) => (
              <CarDetailCard cartype={carType} key={carType.id} />
            ))
        )}
      </AnimatePresence>
    </div>
  );
}

export default ListResult;
