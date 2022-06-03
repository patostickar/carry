import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarTypes } from '../../redux/carsResults';
import { setSameLocation } from '../../redux/searchBar.js';
import { DAY_MILISECONDS } from '../GeneralFuntions/constants.js';
import Location from './locationInput';
import Calendar from './calendar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import styles from './styles/SearchBar.module.css';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'



function SearchBar() {
  const {
    pickupDate,
    dropoffDate,
    pickupLocation,
    dropoffLocation,
    sameLocation,
    popLocation,
  } = useSelector((state) => state.searchBar);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const sameLocation = event.target.value === 'true';
    dispatch(setSameLocation(sameLocation));
  };

  const handleSearch = () => {
    if (!(pickupLocation && dropoffLocation)) {
      return Swal.fire({
        position: 'top-end',
        color: "#1976d2",
        toast:true,
        heightAuto: "100px",
        icon: 'warning',
        title: 'Por favor complete los campos de búsqued',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      // return alert('Por favor complete los campos de búsqueda');
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
    dispatch(fetchCarTypes(pickupLocation.id, pickupDate, dropoffDate));
    navigate('/searchResult');
  };

  return (
    <>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={sameLocation}
          onChange={handleChange}
        >
          <FormControlLabel
            value='true'
            control={<Radio />}
            label='Devolver en el mismo lugar'
          />
          <FormControlLabel
            value='false'
            control={<Radio />}
            label='Devolver en otro lugar'
          />
        </RadioGroup>
      </FormControl>
      <div className={styles.headerSearch}>
        <div className={styles.headerSearchItem}>
          <Location type='Retiro' popLocation={popLocation} />
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
    </>
  );
}

export default SearchBar;
