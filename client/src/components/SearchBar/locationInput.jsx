import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Autocomplete } from '@mui/material';
import {
  setPickupLocation,
  setDroppOffLocation,
  fetchAllLocations,
} from '../../redux/searchBar.js';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import InputAdornment from '@mui/material/InputAdornment';

import '../styles/SearchBar.modules.css';

// Para poder implementar búsqueda no sólo por nombre, sino también por ciudad, getOptionLabel tiene: name, city, state.
// Para poder hacer eso, options contiene el array entero de objetos, sino podría ser sólo un array filtrado de locations.name
export default function Location({ type }) {
  const { locations } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const loading = open && Object.keys(locations).length === 0;

  useEffect(() => {
    let active = true;

    dispatch(fetchAllLocations());
  

    return () => {
      active = false;
    };
  }, [loading]);

  // useEffect(() => {
  //   if (!open) {
  //     setOptions([]);
  //   }
  // }, [open]);

  // useEffect(() => {
  //   dispatch(fetchAllLocations());
  // }, [dispatch]);

  const pickup =
    type === 'pickUp'
      ? useSelector((state) => state.searchBar.pickup_location)
      : useSelector((state) => state.searchBar.dropoff_location);

  function handleDispatch(newValue) {
    type === 'pickUp'
      ? dispatch(setPickupLocation(newValue?.id || null))
      : dispatch(setDroppOffLocation(newValue?.id || null));
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
      options={locations}
      getOptionLabel={(option) =>
        `${option.name}, ${option.city}, ${option.state_name}`
      }
      renderInput={(params) => (
        <>
        <div style={{display:"none"}}>
        {params.inputProps.value = params.inputProps.value.split(",")[0]}
        </div>
          <TextField
            {...params}
            label={`${type}`}
            margin='normal'
            InputProps={{
              ...params.InputProps,
              startAdornment: (
                <InputAdornment position='start'>
                  <DirectionsCarIcon />
                </InputAdornment>
              )
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

      value={pickup}
      isOptionEqualToValue={(option, value) => {
        value = new RegExp(value);
        return value.test(option.name);
      }}
      // En el dropdown aparecen name, ciudad y state, pero en renderOption se ocultan.
      // Si comento esta parte podría verlo
      // renderOption={(props, option, { inputValue }) => {
      //   const matches = match(option.name, inputValue);
      //   const parts = parse(option.name, matches);

      //   return (
      //     <li {...props}>
      //       <div>
      //         {parts.map((part, index) => (
      //           <span
      //             key={index}
      //             style={{
      //               fontWeight: part.highlight ? 700 : 400,
      //             }}
      //           >
      //             {part.text}
      //           </span>
      //         ))}
      //       </div>
      //     </li>
      //   );
      // }}
    />
  );
}
