import { useSelector, useDispatch } from 'react-redux';
import { setCarMake } from '../../../redux/carsResults';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function CarMake() {
  const dispatch = useDispatch();

  const theme = useTheme();

  function getUniquePropertyValues(array, prop) {
    return [...new Set(array.map((element) => element[prop]))];
  }

  const {
    carTypes,
    filters: { carMakes },
  } = useSelector((state) => state.carsResults);

  const makes = getUniquePropertyValues(carTypes, 'make');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(
      setCarMake(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value
      )
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 200 }}>
        <InputLabel id='demo-multiple-chip-label'>Marca</InputLabel>
        {/* <FormLabel component='legend'>Marca</FormLabel> */}
        <Select
          labelId='carMake-multiple-chip-label'
          id='carMake-multiple-chip'
          multiple
          value={carMakes}
          onChange={handleChange}
          input={
            <OutlinedInput id='carMake-multiple-chip-label' label='Chip' />
          }
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {makes.map((value, i) => (
            <MenuItem
              key={i}
              value={value}
              style={getStyles(value, carMakes, theme)}
            >
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
