import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarTypes } from '../../redux/carsResults';
import Location from './locationInput';
import Calendar from './calendar';
import styles from './styles/SearchBar.module.css';

function SearchBar() {
  const { sameLocation } = useSelector((state) => state.searchBar);
  const { pickupLocation } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  



  const handleSearch = () => {
    dispatch(fetchCarTypes(pickupLocation));
    navigate('/searchResult');
  };

  return (
    <div className={styles.headerSearch}>
      <div className={styles.headerSearchItem}>
        <Location type='Pick-up' />
      </div>
      <div className={styles.headerSearchItem}>
        <Location type='Drop-off' sameLocation={sameLocation} />
      </div>
      <Calendar />
      <div className={styles.headerSearchItem}>
        <button className={styles.headerButton} onClick={handleSearch}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
