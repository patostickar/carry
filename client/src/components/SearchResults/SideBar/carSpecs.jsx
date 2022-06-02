import { useDispatch, useSelector } from 'react-redux';
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
  const { airConditioning, fourPlusSeats } = useSelector(
    (state) => state.carsResults.filters
  );

  const dispatch = useDispatch();

  const handleAircon = (event) => {
    const { checked } = event.target;
    dispatch(setAirConditioning(checked));
  };

  const handleSeats = (event) => {
    const { checked } = event.target;
    dispatch(setFourPlusSeats(checked));
  };

  // const handleAircon = (event) => {
  //   const { checked } = event.target;
  //   setAircon(checked);
  //   checked
  //     ? dispatch(setAirConditioning(checked))
  //     : dispatch(setAirConditioning(null));
  // };

  // const handleDoors = (event) => {
  //   const { checked } = event.target;
  //   setSeats(checked);
  //   checked
  //     ? dispatch(setFourPlusSeats(checked))
  //     : dispatch(setFourPlusSeats(null));
  // };

  return (
    <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
      <FormLabel component='legend'>Características del coche</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={airConditioning}
              onChange={handleAircon}
              disabled={false}
              name='airConditioning'
            />
          }
          label='Aire acondicionado'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={fourPlusSeats}
              onChange={handleSeats}
              disabled={false}
              name='fourPlusSeats'
            />
          }
          label='4+ Asientos'
        />
      </FormGroup>
    </FormControl>
  );
}
