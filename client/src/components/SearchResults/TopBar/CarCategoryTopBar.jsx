import { useSelector } from "react-redux";
import CarCategory from "./carCategory";
import styles from "./styles/CarCategoryTopBar.module.css";

export default function TopBar() {
  const { carTypes } = useSelector((state) => state.carsResults);

  const types = [
    ...new Map(carTypes.map((item) => [item.className, item])).values(),
  ];
  return (
    <div className={styles.CarCategoryTopBar}>
      <ul>
        {types.map((carType) => (
          <CarCategory
            category={carType.className}
            img={carType.img}
            key={carType.id}
          />
        ))}
      </ul>
    </div>
  );
}
