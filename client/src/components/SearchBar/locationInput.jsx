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
import './styles/locationInput.module.css';

export default function Location({ type, sameLocation }) {
  const { locations, pickupLocation, dropoffLocation } = useSelector(
    (state) => state.searchBar
  );

  console.log(locations)

  
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllLocations());
  }, []);

  const location = type === 'Pick-up' ? pickupLocation : dropoffLocation;

  function handleDispatch(newValue) {
    type === 'Pick-up'
      ? dispatch(setPickupLocation(newValue || null))
      : dispatch(setDroppOffLocation(newValue || null));
  }

  return (
    <Autocomplete
      disabled={sameLocation}
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
      /*
      One thing about getOptionLabel is it doesn’t change the input value. 
      It only alters the label which we see in the list. 
      The input value is still the whole individual object. 
      This fact needs to etch in your mind because knowing this would avoid 60% of errors.
      */
      options={locations}
      getOptionLabel={(option) =>
        `${option.name}, ${option.city}, ${option.state_name}`
      }
      value={location}
      onChange={(event, newValue) => {
        handleDispatch(newValue);
      }}
      renderInput={(params) => {
        params.inputProps.value = params.inputProps.value.split(',')[0];
        return (
          <TextField
            {...params}
            label={type}
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
