import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import setTransmission from '../../../redux/carsResults.js';

export default function Transmission() {
  const [state, setState] = useState({
    manual: false,
    automatic: false,
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { checked, name } = event.target;
    setState({
      ...state,
      [name]: checked,
    });
    checked ? dispatch(setTransmission(name)) : dispatch(setTransmission(null));
  };

  const { manual, automatic } = state;

  return (
    <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
      <FormLabel component='legend'>Transmission</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={manual}
              onChange={handleChange}
              disabled={automatic}
              name='manual'
            />
          }
          label='Manual'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={automatic}
              onChange={handleChange}
              disabled={manual}
              name='automatic'
            />
          }
          label='Automatic'
        />
      </FormGroup>
    </FormControl>
  );
}
