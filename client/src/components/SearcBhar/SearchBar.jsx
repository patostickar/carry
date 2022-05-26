import Location from './locationInput';
import Calendar from './Calendar';

// Se puede busar por nombre, ciudad o estado
export default function SearchBar() {
  return (
    <>
      <Location type='pickUp' />
      <Location type='dropOff' />
      <Calendar />
    </>
  );
}
