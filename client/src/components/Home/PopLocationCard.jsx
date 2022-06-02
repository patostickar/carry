<<<<<<< HEAD:client/src/components/PopLocationCard.jsx
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import styles from "./styles/PopularLocations.module.css";
=======
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
>>>>>>> development:client/src/components/Home/PopLocationCard.jsx

export default function PopLocationCard({ cityName, img, agencies }) {
  const dispatch = useDispatch();

  function handleDispatch() {
    dispatch(setPopLocation(cityName));
  }

  return (
    <div className={styles.card}>
      <Card
        sx={{
          maxWidth: 345,
          borderRadius: "1rem",
          boxShadow: "6px 5px 3px 6px hsla(var(--second-hue), 48%, 8%, 0.04)",
        }}
      >
        <CardActionArea>
          <CardMedia
<<<<<<< HEAD:client/src/components/PopLocationCard.jsx
            component="img"
            height="140"
            image={image}
            alt="green iguana"
=======
            component='img'
            height='140'
            image={img}
            alt='green iguana'
>>>>>>> development:client/src/components/Home/PopLocationCard.jsx
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cityName}
            </Typography>
<<<<<<< HEAD:client/src/components/PopLocationCard.jsx
            <Typography variant="body2" color="text.secondary">
              Alquiler de vehiculos en {pickPoints} agencias
=======
            <Typography variant='body2' color='text.secondary'>
              Alquiler de vehiculos en {agencies}{' '}
              {agencies === 1 ? 'agencia' : 'agencias'}
>>>>>>> development:client/src/components/Home/PopLocationCard.jsx
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <DirectionsCarIcon
                sx={{
                  mr: "0.5em",
                  ml: "0.5em",
                  mt: "1em",
                }}
              />
              Desde $ 4.500 por día
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
<<<<<<< HEAD:client/src/components/PopLocationCard.jsx
          <Button size="small" color="primary">
=======
          <Button size='small' color='primary' onClick={handleDispatch}>
>>>>>>> development:client/src/components/Home/PopLocationCard.jsx
            Elegir
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
