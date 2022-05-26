import { TextField, Autocomplete } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPickupLocation,
  setDroppOffLocation,
  setPickupTime,
  setDroppOffTime,
  fetchAllLocations,
} from '../redux/searchBar.js';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InputAdornment from '@mui/material/InputAdornment';
import { useEffect } from 'react';

// Se puede busar por nombre, ciudad o estado
export default function SearchBar() {
  return (
    <>
      <Location type='pickUp' />
      <Location type='dropOff' />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <BasicDatePicker type='pickUp' />
        <BasicDatePicker type='dropOff' />
      </LocalizationProvider>
    </>
  );
}
// Para poder implementar búsqueda no sólo por nombre, sino también por ciudad, getOptionLabel tiene: name, city, state.
// Para poder hacer eso, options contiene el array entero de objetos, sino podría ser sólo un array filtrado de locations.name

function Location({ type }) {
  const dispatch = useDispatch();

  // const pickup =
  //   type === 'pickUp'
  //     ? useSelector((state) => state.searchBar.pickup_location)
  //     : useSelector((state) => state.searchBar.dropoff_location);

  const { locations } = useSelector((state) => state.searchBar);

  function handleDispatch(newValue) {
    type === 'pickUp'
      ? dispatch(setPickupLocation(newValue?.name || null))
      : dispatch(setDroppOffLocation(newValue?.name || null));
  }

  useEffect(() => {
    dispatch(fetchAllLocations());
  }, [dispatch]);

  return (
    <Autocomplete
      id='pickup_location'
      sx={{ width: 300 }}
      clearOnEscape
      options={locations}
      getOptionLabel={(option) =>
        `${option.name} ${option.city} ${option.state_name}`
      }
      renderInput={(params) => (
        <>
          <TextField
            {...params}
            label='Pick-up location'
            margin='normal'
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start'>
                  <DirectionsCarIcon />
                </InputAdornment>
              ),
              endAdornment: null,
            }}
          />
        </>
      )}
      onChange={(event, newValue) => {
        handleDispatch(newValue);
      }}
      // La propiedad value={pickup} debería contener el valor actual que viene de redux (en nuestro caso: name)
      // Esta necesita coincidir con los valores de options, que como le estoy pasando un objeto, no va a encontrar en options el vlaor name
      // Para eso se usa isOptionEqualToValue, para hacer la comparación manual
      // Por algún motivo, si bien la comparación arroja true, en la página aparece undefined undefined undefined
      // De todos modos, quitando value e isOptionEqualToValue, hace que funcione todo bien

      // value={pickup}
      // isOptionEqualToValue={(option, value) => {
      //   value = new RegExp(value);
      //   return value.test(option.name);
      // }}

      // En el dropdown aparecen name, ciudad y state, pero en renderOption se ocultan.
      // Si comento esta parte podría verlo
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
}

function BasicDatePicker({ type }) {
  const dispatch = useDispatch();
  const date =
    type === 'pickUp'
      ? useSelector((state) => state.searchBar.pickup_date)
      : useSelector((state) => state.searchBar.dropoff_date);

  function handleDispatch(newValue) {
    type === 'pickUp'
      ? dispatch(setPickupTime(newValue.getTime() || null))
      : dispatch(setDroppOffTime(newValue.getTime() || null));
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label='Basic example'
        value={date}
        onChange={(newValue) => {
          handleDispatch(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
