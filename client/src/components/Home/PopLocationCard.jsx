import { useDispatch } from 'react-redux';
import { setPopLocation } from '../../redux/searchBar.js';
import {
  Button,
  CardActionArea,
  CardActions,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import styles from './styles/PopularLocations.module.css';

export default function PopLocationCard({ cityName, image, pickPoints }) {
  const dispatch = useDispatch();

  function handleDispatch() {
    dispatch(setPopLocation(cityName));
  }

  return (
    <div className={styles.card}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={image}
            alt='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {cityName}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Alquiler de vehiculos en {pickPoints} agencias
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              <DirectionsCarIcon
                sx={{
                  mr: '0.5em',
                  ml: '0.5em',
                  mt: '1em',
                }}
              />
              Desde $ 4.500 por día
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary' onClick={handleDispatch}>
            Elegir
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
