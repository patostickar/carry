import { useSelector } from 'react-redux';
import PopLocationCard from './PopLocationCard';
import styles from './styles/PopularLocations.module.css';

export default function PopularLocations() {
  const { locations } = useSelector((state) => state.searchBar);

  // La tomé prestada de internet, filtra uno de cada ciudad
  const popLocation = locations.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.state_name === value.state_name)
  );

  // Agrupa por ciudad
  const popLocationCount = locations.reduce(function (acc, item) {
    const key = item.state_name;
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
            cityName={pl.state_name}
            agencies={popLocationCount[pl.state_name].length}
            img={pl.img}
          />
        ))}
      </div>
    </div>
  );
}
