import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarTypes } from '../../redux/carsResults';
import Location from './locationInput';
import Calendar from './calendar';
import styles from './styles/SearchBar.module.css';

function SearchBar() {
  const {
    sameLocation,
    pickupDate,
    dropoffDate,
    pickupLocation,
    dropoffLocation,
  } = useSelector((state) => state.searchBar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!(pickupLocation && dropoffLocation)) {
      return alert('Por favor complete los campos de búsqueda');
    }
    if (dropoffDate - pickupDate < 86400000) {
      return alert('El alquiler mínimo es de 24 hs');
    }
    dispatch(fetchCarTypes(pickupLocation));
    navigate('/searchResult');
  };

  return (
    <div className={styles.headerSearch}>
      <div className={styles.headerSearchItem}>
        <Location type='Retiro' />
      </div>
      <div className={styles.headerSearchItem}>
        <Location type='Devolución' sameLocation={sameLocation} />
      </div>
      <Calendar />
      <div className={styles.headerSearchItem}>
        <button className={styles.siCheckButton} onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
