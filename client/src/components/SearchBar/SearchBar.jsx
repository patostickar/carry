import { useNavigate } from 'react-router-dom';
import Location from './locationInput';
import Calendar from './calendar';
import styles from './styles/SearchBar.module.css';

function SearchBar() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/searchResult');
  };

  return (
    <div className={styles.headerSearch}>
      <div className={styles.headerSearchItem}>
        <Location type='pickUp' />
      </div>
      <div className={styles.headerSearchItem}>
        <Location type='dropOff' />
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
