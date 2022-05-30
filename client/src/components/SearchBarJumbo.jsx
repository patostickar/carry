import SearchBar from './SearchBar/SearchBar';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from './styles/SearchBarJumbo.module.css';

// Se puede busar por nombre, ciudad o estado
export default function SearchBarJumbo() {
  return (
    <div className={styles.searchBarJumbo}>
      <div className={styles.headerContainer}>
        <h1>Alquiler de autos para cualquier tipo de viaje</h1>
        <p className={styles.headerDesc}>
          Compara ofertas de las mayores empresas de alquiler de autos
        </p>

        <div className={styles.inputRadioContainer}>
          <div className={styles.headerInputRadio}>
            <input
              type='radio'
              name='Return to same location'
              id='radio1'
              selected
            />
            <label htmlFor='radio1'>Devolver en la misma ubicacion</label>
          </div>

          <div className={styles.headerInputRadio}>
            <input type='radio' name='Return to same location' id='radio2' />
            <label htmlFor='radio2'>Devolver en una ubicacion diferente</label>
          </div>
        </div>
        <div className={styles.searchBarPosition}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
