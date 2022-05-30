import { useSelector } from 'react-redux';
import CarCategory from './carCategory';
import styles from './styles/TopBar.module.css';

export default function TopBar() {
  const { carTypes } = useSelector((state) => state.carsResults);

  const types = [
    ...new Map(carTypes.map((item) => [item.class_name, item])).values(),
  ];
  return (
    <div className={styles.carTypeTopFilter}>
      <ul>
        {types.map((carType) => (
          <CarCategory
            category={carType.class_name}
            img={carType.img}
            key={carType.id}
          />
        ))}
      </ul>
    </div>
  );
}
// src='https://cdn2.rcstatic.com/images/car_images/web/bmw/x1_lrg.jpg'
// src='https://cdn2.rcstatic.com/images/car_images/web/vauxhall/insignia_lrg.jpg'
// src='https://cdn2.rcstatic.com/images/car_images/web/ford/fiesta_lrg.jpg'
// src='https://cdn2.rcstatic.com/images/car_images/web/fiat/500_lrg.jpg'
