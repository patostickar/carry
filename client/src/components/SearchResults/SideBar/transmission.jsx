import { useDispatch, useSelector } from 'react-redux';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { setTransmission } from '../../../redux/carsResults';

export default function Transmission() {
  const { manual, automático } = useSelector(
    (state) => state.carsResults.filters.transmission
  );

  const dispatch = useDispatch();

  const handleTransmission = (event) => {
    const { name, checked } = event.target;
    dispatch(setTransmission({ name, checked }));
  };

  return (
    <FormControl sx={{ m: 3 }} component='fieldset' variant='standard'>
      <FormLabel component='legend'>Transmisión</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={manual}
              onChange={handleTransmission}
              disabled={automático}
              name='manual'
            />
          }
          label='Manual'
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={automático}
              onChange={handleTransmission}
              disabled={manual}
              name='automático'
            />
          }
          label='Automático'
        />
      </FormGroup>
    </FormControl>
  );
}
