import { useSelector, useDispatch } from 'react-redux';
import { setSameLocation } from '../../redux/searchBar.js';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import SearchBar from '../SearchBar/SearchBar';
import { useTypewriter } from 'react-simple-typewriter';
import styles from './styles/SearchBarJumbo.module.css';

export default function SearchBarJumbo() {
  const sameLocation = useSelector((state) => state.searchBar.sameLocation);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const sameLocation = event.target.value === 'true';
    dispatch(setSameLocation(sameLocation));
  };

  const { text } = useTypewriter({
    words: ['en familia', 'con amigos', 'de negocios', 'a toda la Argentina'],
    loop: 0,
  });

  return (
    <div className={styles.searchBarJumbo}>
      <div className={styles.headerContainer}>
        <h1>
          Alquiler de autos para viajes <span>{text}</span>
        </h1>
        <p className={styles.headerDesc}>
          Conocé la gran flota que tenemos para ofrecerte. Autos de primera gama
          para que tu viaje tenga el confort y seguridad que necesitas.
        </p>

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
        <div className={styles.searchBarPosition}>
          <SearchBar />
        </div>
      </div>
    </div>
  );
}
