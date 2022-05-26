import React from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import styles from "../components/styles/PopLocationCard.module.css"


export default function PopLocationCard(){
    return (
            <div className={styles.cardComp}>
        

        <img
          src="https://www.infobae.com/new-resizer/X3u6URzfxxPCbh8gW4xAZj3nKpo=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg"
          alt="Buenos Aires"
          width="300px"
          height="250px"
        />

    <h3>Buenos Aires</h3>

    <h4>Car rentals in xx locations</h4>
    <h5> <DirectionsCarIcon  /> From 1.250$ a day</h5>

    <h5><a href="#">Search car rentals in Buenos Aires</a></h5>
        
        
      </div>
    )
}