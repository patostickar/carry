import { useState } from 'react';
import { useDispatch } from 'react-redux';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {
  setAirConditioning,
  setFourPlusSeats,
} from '../../../redux/carsResults.js';

export default function CarSpecs() {
  const [aircon, setAircon] = useState(false);
  const [seats, setSeats] = useState(false);

  const dispatch = useDispatch();

  const handleAircon = (event) => {
    const { checked } = event.target;
    setAircon(checked);
    checked
      ? dispatch(setAirConditioning(checked))
      : dispatch(setAirConditioning(null));
  };

  const handleDoors = (event) => {
    const { checked } = event.target;
    setSeats(checked);
    checked
      ? dispatch(setFourPlusSeats(checked))
      : dispatch(setFourPlusSeats(null));
  };

  return (
    <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
      <FormLabel component='legend'>Car Specs</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={aircon}
              onChange={handleAircon}
              disabled={false}
              name='aircon'
            />
          }
          label='Air Conditioning'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={seats}
              onChange={handleDoors}
              disabled={false}
              name='seats'
            />
          }
          label='4+ seats'
        />
      </FormGroup>
    </FormControl>
  );
}
