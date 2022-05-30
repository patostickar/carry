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

export default function Location({ type }) {
  const { locations } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchAllLocations());
  }, []);

  const location =
    type === 'Pick-up'
      ? useSelector((state) => state.searchBar.pickup_location)
      : useSelector((state) => state.searchBar.dropoff_location);

  function handleDispatch(newValue) {
    type === 'Pick-up'
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
          <div style={{ display: 'none' }}>
            {(params.inputProps.value = params.inputProps.value.split(',')[0])}
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
              ),
            }}
          />
        </>
      )}
      onChange={(event, newValue) => {
        handleDispatch(newValue);
      }}
      value={location}
      isOptionEqualToValue={(option, value) => {
        value = new RegExp(value);
        return value.test(option.name);
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
