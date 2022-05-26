import React from "react";
import PopLocationCard from "./PopLocationCard";
import styles from "./styles/PopularLocations.module.css"


export default function PopularLocations() {
    return(
        <div className={styles.container}>
            <h1>Popular locations</h1>
            <div className={styles.card}>
            <PopLocationCard />
            </div>

            <div className={styles.card}>
            <PopLocationCard />
            </div>

            <div className={styles.card}>
            <PopLocationCard />
            </div>
            
        </div>
    )
}