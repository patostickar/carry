import React from "react";
import PopLocationCard from "./PopLocationCard";
import styles from "./styles/PopularLocations.module.css"
import { useSelector } from "react-redux";


export default function PopularLocations() {

    
  const { locations } = useSelector((state) => state.searchBar);

  const baires = locations.filter((c) => c.state_name === "Buenos Aires City" );
  const province = locations.filter((c) => c.state_name === "Buenos Aires Province" );
  const bairestotal = baires.length + province.length

  const mendoza = locations.filter((c) => c.state_name === "Mendoza" );
  

  const cordoba = locations.filter((c) => c.state_name === "Córdoba" );
  


    
  console.log(bairestotal)
    return(
        <div className={styles.container}>
            <h1>Ubicaciones populares</h1>
            <div className={styles.card}>
            <PopLocationCard
            city={"Buenos Aires"}
            image= {"https://www.infobae.com/new-resizer/X3u6URzfxxPCbh8gW4xAZj3nKpo=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg"}
            pickPoints = {bairestotal}
           
           />

            </div>

            <div className={styles.card}>
            <PopLocationCard
            city={"Cordoba"} 
            image={"https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/andres-landeau.jpg"}
            pickPoints = {cordoba.length}
            />
            </div>

            <div className={styles.card}>
            <PopLocationCard
            city={"Mendoza"}
            image={"https://ciudaddemendoza.gob.ar/wp-content/uploads/2016/10/sliderhome.jpg"}
            pickPoints = {mendoza.length}
            
            />
            </div>
            
        </div>
    )
}