import { TextField, Autocomplete } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPickupLocation,
  setDroppOffLocation,
  setPickupTime,
  setDroppOffTime,
} from '../redux/searchBar.js';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InputAdornment from '@mui/material/InputAdornment';

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

  function handleDispatch(newValue) {
    type === 'pickUp'
      ? dispatch(setPickupLocation(newValue?.name || null))
      : dispatch(setDroppOffLocation(newValue?.name || null));
  }

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

const locations = [
  {
    name: 'Agencia La Mona',
    street: 'Huiliches 1021',
    city: 'Córdoba',
    state_name: 'Córdoba',
    postal_code: 'X5016',
    geo: '[-31.423717, -64.180855]',
    telephone: '0351 461-1369',
    time_open: '07:00:00',
    time_close: '23:00:00',
    airport_location: false,
  },
  {
    name: 'Ministro Pistarini International Airport',
    street: 'AU Tte. Gral. Pablo Riccheri Km 33',
    city: 'Ezeiza',
    state_name: 'Buenos Aires Province',
    postal_code: 'B1802',
    geo: '[-34.8150, -58.5348]',
    telephone: '04949454866',
    time_open: '05:00:00',
    time_close: '00:00:00',
    airport_location: true,
  },
  {
    name: 'Palermo Cars',
    street: 'Humboldt 1897',
    city: 'Buenos Aires City',
    state_name: 'Buenos Aires City',
    postal_code: 'C1425FWB',
    geo: '[-34.583477, -58.433671]',
    telephone: '011 4776-6197',
    time_open: '07:00:00',
    time_close: '23:00:00',
    airport_location: false,
  },
  {
    name: 'Aeroparque Internacional Jorge Newbery',
    street: 'Av. Costanera Rafael Obligado s/n',
    city: 'Buenos Aires City',
    state_name: 'Buenos Aires City',
    postal_code: 'C1425',
    geo: '[-34.5580, -58.4170]',
    telephone: '011 5480-6111',
    time_open: '05:00:00',
    time_close: '00:00:00',
    airport_location: true,
  },
  {
    name: 'Santiago Cars',
    street: 'Av Roca Sur 488',
    city: 'Santiago del Estero',
    state_name: 'Santiago del Estero',
    postal_code: 'G4200',
    geo: '[-27.783843,-64.257496]',
    telephone: '03854 22-3663',
    time_open: '07:00:00',
    time_close: '23:00:00',
    airport_location: false,
  },
  {
    name: 'Aeropuerto Internacional El Plumerillo - Mendoza',
    street: 'Acceso A Aeropuerto Internacional Gabrielli F. J.',
    city: 'Las Heras',
    state_name: 'Mendoza',
    postal_code: '5541',
    geo: '[-32.8277 ,-68.7984]',
    telephone: '866.118.4798x14335',
    time_open: '05:00:00',
    time_close: '00:00:00',
    airport_location: true,
  },
  {
    name: 'Corrientes Cars',
    street: 'Hipólito Yrigoyen 2002',
    city: 'Corrientes',
    state_name: 'Corrientes',
    postal_code: '3400',
    geo: '[-27.469872, -58.825407]',
    telephone: '0379 426-9970',
    time_open: '07:00:00',
    time_close: '23:00:00',
    airport_location: false,
  },
  {
    name: 'Ushuaia Airport',
    street: 'Roque Sánchez Galdeano',
    city: 'Ushuaia',
    state_name: 'Tierra del Fuego',
    postal_code: 'V9401',
    geo: '[-54.8396 , -68.3122]',
    telephone: '02901 43-1232',
    time_open: '05:00:00',
    time_close: '00:00:00',
    airport_location: true,
  },
  {
    name: 'Santa Fe Cars',
    street: 'Av Aristóbulo del Valle 6273',
    city: 'Santa Fe',
    state_name: 'Santa Fe',
    postal_code: 'S3000',
    geo: '[-31.6113, -60.695011]',
    telephone: '0342 460-9888',
    time_open: '07:00:00',
    time_close: '23:00:00',
    airport_location: false,
  },
  {
    name: 'Aeropuerto Internacional de Bariloche Tte. Luis Candelaria',
    street: 'RP80 S/N',
    city: 'San Carlos de Bariloche',
    state_name: 'Río Negro',
    postal_code: '8400',
    geo: '[-41.1335, -71.3103]',
    telephone: '0294 440-5016',
    time_open: '05:00:00',
    time_close: '00:00:00',
    airport_location: true,
  },
];
