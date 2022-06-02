import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TextField, Autocomplete } from '@mui/material';
import {
  setPickupLocation,
  setDroppOffLocation,
  setPopLocation,
} from '../../redux/searchBar.js';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InputAdornment from '@mui/material/InputAdornment';
import './styles/locationInput.module.css';

export default function Location({ type, sameLocation, popLocation }) {
  const { locations, pickupLocation, dropoffLocation } = useSelector(
    (state) => state.searchBar
  );

  const route = useLocation();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  // Sólamente el input de pickup recibe por props popLocation
  // DropOff no lo recibe, y por eso el comportamiento de inputValue es como si no estuviese
  const [input, setInput] = useState(popLocation);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Evito que este comportamiento suceda en searchResults
    if (popLocation && (route.pathname === '/' || route.pathname === '/home')) {
      // Si hay popLocation (seteado por una card), abro la lista, seteo el input, voy hacia arriba
      setOpen(true);
      setInput(popLocation);
      scrollToTop();
    }
    // Cuando paso a results, como popLocation === "", me muestra eso en vez del valor elegido
    // Para evitar eso, seteo el valor al de pickup
    // No es la mejor manera, pero funciona
    if (route.pathname === '/searchResult' && type === 'Pick-up') {
      setInput(pickupLocation.name);
    }
    return () => {
      dispatch(setPopLocation(''));
    };
  }, [popLocation]);

  const location = type === 'Pick-up' ? pickupLocation : dropoffLocation;

  function handleDispatch(newValue) {
    type === 'Pick-up'
      ? dispatch(setPickupLocation(newValue || null))
      : dispatch(setDroppOffLocation(newValue || null));
  }

  return (
    <Autocomplete
      className='headerSearchInput'
      id='pickup_location'
      sx={{ width: 300 }}
      disabled={sameLocation}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      clearOnEscape
      options={locations}
      // El verdadero texto del input, luego modificado por renderInput
      getOptionLabel={(option) =>
        `${option.name}, ${option.city}, ${option.state_name}`
      }
      // options y value contienen objetos, como no se puede saber si son iguales, hay que hacer esta comparación
      isOptionEqualToValue={(option, value) => {
        return option.name === value.name;
      }}
      // Cuando abro el menú desde popLocations, no hay event. Sin el condicional, esta prop me borraría el valor a luego de setear el input desde la card "".
      onInputChange={(event, input) => {
        if (event) setInput(input);
      }}
      // Me permite controlar el valor que se muestra en el input (no el finalmente seleccionado). Si no fuera por popLocations no sería necesario
      inputValue={input}
      // Se ejecuta al seleccionar una opción, no mientras se escribe
      onChange={(event, newValue) => {
        handleDispatch(newValue);
      }}
      // El valor real del input
      value={location}
      noOptionsText={'No se encuentra la ubicación'}
      // Muetra sólo option.name
      renderInput={(params) => {
        params.inputProps.value = params.inputProps.value.split(',')[0];
        return (
          <TextField
            {...params}
            label={type}
            placeholder='Elegir ubicación'
            margin='normal'
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start'>
                  <DirectionsCarIcon />
                </InputAdornment>
              ),
            }}
          />
        );
      }}
      // Permite marcar en negrita cuando coincide lo que se escribe con alguna opción
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
