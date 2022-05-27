import React from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import styles from "../components/styles/PopLocationCard.module.css"


export default function PopLocationCard({city, image, pickPoints }){
    return (
            <div className={styles.cardComp}>
        

        <img
          src={image}
          alt="Buenos Aires"
          width="300px"
          height="250px"
        />

    <h3>{city}</h3>

    <h4>Alquiler de vehiculos en {pickPoints} agencias</h4>
    <h5> <DirectionsCarIcon  /> Desde 1.250$ por dia</h5>

    <h5><a href="#">Vehiculos en {city}</a></h5>
        
        
      </div>
    )
}