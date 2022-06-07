import { useSelector } from 'react-redux';
import PopLocationCard from './PopLocationCard';
import styles from './styles/PopularLocations.module.css';

export default function PopularLocations() {
  const { locations } = useSelector((state) => state.searchBar);

  // La tomé prestada de internet, filtra uno de cada ciudad
  const popLocation = locations.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.stateName === value.stateName)
  );

  // Agrupa por ciudad
  const popLocationCount = locations.reduce(function (acc, item) {
    const key = item.stateName;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <div className='section__title'>
        <h2>Destinos populares</h2>
      </div>
      <div className={styles.cardsContainer}>
        {popLocation.map((pl, i) => (
          <PopLocationCard
            key={i}
            cityName={pl.stateName}
            agencies={popLocationCount[pl.stateName].length}
            img={pl.img}
          />
        ))}
      </div>
    </div>
  );
}
