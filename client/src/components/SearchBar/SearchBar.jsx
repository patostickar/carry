import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarTypes } from '../../redux/carsResults';
import { DAY_MILISECONDS } from '../GeneralFuntions/constants.js';
import Location from './locationInput';
import Calendar from './calendar';
import styles from './styles/SearchBar.module.css';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'



function SearchBar() {
  const { pickupDate, dropoffDate, location, popLocation } = useSelector(
    (state) => state.searchBar
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {

    if (!location) {
      return Swal.fire({
        position: 'top-end',
        color: "#1976d2",
        toast:true,
        heightAuto: "100px",
        icon: 'warning',
        title: 'Por favor elija una ubicación',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })


    }
    if (dropoffDate - pickupDate < DAY_MILISECONDS) {
      return Swal.fire({
        position: 'top-end',
        toast:true,
        icon: 'info',
        title: 'El alquiler mínimo es de 24 hs',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
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
