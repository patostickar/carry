import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setPickupTime, setDroppOffTime } from '../../redux/searchBar.js';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({ type }) {
  const dispatch = useDispatch();
  const date =
    type === 'Pick-up'
      ? useSelector((state) => state.searchBar.pickup_date)
      : useSelector((state) => state.searchBar.dropoff_date);

  function handleDispatch(newValue) {
    type === 'Pick-up'
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
