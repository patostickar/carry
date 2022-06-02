import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import styles from "./styles/PopularLocations.module.css";

export default function PopLocationCard({ cityName, image, pickPoints }) {
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
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cityName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Alquiler de vehiculos en {pickPoints} agencias
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
          <Button size="small" color="primary">
            Elegir
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
