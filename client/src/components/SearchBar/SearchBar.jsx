import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarTypes } from '../../redux/carsResults';
import { DAY_MILISECONDS } from '../GeneralFuntions/constants';
import Location from './locationInput';
import Calendar from './calendar';
import styles from './styles/SearchBar.module.css';
import 'sweetalert2/dist/sweetalert2.css';
import { Alerts } from '../GeneralFuntions/GeneralFuntions';

function SearchBar() {
  const { pickupDate, dropoffDate, location, popLocation } = useSelector(
    (state) => state.searchBar
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!location) {
      return Alerts('warning', 'Por favor elija una ubicación');
    }
    if (dropoffDate - pickupDate < DAY_MILISECONDS) {
      return Alerts('info', 'El alquiler mínimo es de 24 hs');
    }
    dispatch(fetchCarTypes(location.id, pickupDate, dropoffDate));
    navigate('/searchResult');
  };

  return (
    <>
      <div className={styles.headerSearch}>
        <div className={styles.headerSearchItem}>
          <Location type='Ubicación' popLocation={popLocation} />
        </div>
        <Calendar />
        <div className={styles.headerSearchItem}>
          <button className={styles.siCheckButton} onClick={handleSearch}>
            Buscar
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
