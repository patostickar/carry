import Transmission from './transmission';
import CarCategory from './carCategory';
import CarSpecs from './carSpecs';
import Box from '@mui/material/Box';

function SideBar() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Transmission />
      <CarSpecs />
      <CarCategory />
    </Box>
  );
}

export default SideBar;
