import { useDispatch } from 'react-redux';
import { clearAllFilters } from '../../../redux/carsResults.js';
import Box from '@mui/material/Box';
import Transmission from './transmission';
import CarCategory from './carCategory';
import CarSpecs from './carSpecs';
import Divider from '@mui/material/Divider';

function SideBar() {
  const dispatch = useDispatch();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <h2>Filter</h2>
      <button onClick={() => dispatch(clearAllFilters())}>
        <h4>Clear all filters</h4>
      </button>
      <Divider />
      <Transmission />
      <Divider />
      <CarSpecs />
      <Divider />
      <CarCategory />
    </Box>
  );
}

export default SideBar;
