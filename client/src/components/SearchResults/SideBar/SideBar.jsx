import { useDispatch } from 'react-redux';
import { clearAllFilters } from '../../../redux/carsResults.js';
import Box from '@mui/material/Box';
import BasicModal from '../../BasicModal';
import Transmission from './transmission';
import CarCategory from './carCategory';
import CarSpecs from './carSpecs';
import CarMake from './carMake';
import Divider from '@mui/material/Divider';
import MapView from '../../LocationsMap/MapView';
import styles from './styles/SideBar.module.css';

function SideBar() {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className={styles.googleMap}>
        <BasicModal text='Ver Mapa'>
          <MapView />
        </BasicModal>
      </div>
      <h2>Filter</h2>
      <button
        className={styles.siCheckButton}
        onClick={() => dispatch(clearAllFilters())}
      >
        Clear all filters
      </button>
      <Divider />
      <Transmission />
      <Divider />
      <CarSpecs />
      <Divider />
      <CarCategory />
      {/* <Divider /> */}
      <CarMake />
    </Box>
  );
}

export default SideBar;
