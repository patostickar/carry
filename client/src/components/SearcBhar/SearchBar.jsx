import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Location from './locationInput';
import BasicDatePicker from './dateInput';

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
