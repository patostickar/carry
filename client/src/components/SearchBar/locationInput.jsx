import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TextField, Autocomplete } from '@mui/material';
import { setLocation, setPopLocation } from '../../redux/searchBar.js';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InputAdornment from '@mui/material/InputAdornment';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import './styles/locationInput.module.css';

export default function Location({ type, popLocation }) {
  const { locations, location } = useSelector((state) => state.searchBar);

  const route = useLocation();

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState(popLocation || location?.name);

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
    return () => {
      dispatch(setPopLocation(''));
    };
  }, [popLocation]);

  function handleDispatch(newValue) {
    dispatch(setLocation(newValue || null));
  }

  return (
    <Autocomplete
      className='headerSearchInput'
      id='pickup_location'
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      clearOnEscape
      options={[...locations].sort((a, b) => a.name.localeCompare(b.name))}
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
