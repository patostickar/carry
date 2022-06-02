import Steps from "./steps";
import CarDetailCard from "./carDetailCard";
import CarCategoryTopBar from "../TopBar/CarCategoryTopBar";
import LinearIndeterminate from "../../GeneralFuntions/LinearIndeterminate";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import styles from "./styles/ListResult.module.css";

function ListResult() {
  const {
    carTypes,
    filters: {
      transmission,
      carCategory,
      airConditioning,
      fourPlusSeats,
      carMakes,
    },
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
    <div className={styles.listResult}>
      <div className={styles.listTitle}>
        <h1>Bogotá: 65 autos disponibles</h1>
      </div>
      <Steps />
      <CarCategoryTopBar />
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
            .filter((carType) =>
              carMakes.length ? carMakes.includes(carType.make) : true
            )
            .map((carType) => (
              <CarDetailCard cartype={carType} key={carType.id} />
            ))
        )}
      </AnimatePresence>
    </div>
  );
}

export default ListResult;
