import PopLocationCard from "./PopLocationCard";
import styles from "./styles/PopularLocations.module.css";
import { useSelector } from "react-redux";

export default function PopularLocations() {
  const { locations } = useSelector((state) => state.searchBar);
  const baires = locations.filter((c) => c.state_name === "Buenos Aires City");
  const province = locations.filter(
    (c) => c.state_name === "Buenos Aires Province"
  );
  const bairestotal = baires.length + province.length;
  const mendoza = locations.filter((c) => c.state_name === "Mendoza");
  const cordoba = locations.filter((c) => c.state_name === "Córdoba");

  return (
    <div className={styles.container}>
      <div className="section__title">
        <h2>Popular locations</h2>
      </div>
      <div className={styles.cardsContainer}>
        <PopLocationCard
          cityName={"Buenos Aires"}
          image={
            "https://www.infobae.com/new-resizer/X3u6URzfxxPCbh8gW4xAZj3nKpo=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg"
          }
          pickPoints={bairestotal}
        />
        <PopLocationCard
          cityName={"Cordoba"}
          image={
            "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/andres-landeau.jpg"
          }
          pickPoints={cordoba.length}
        />
        <PopLocationCard
          cityName={"Mendoza"}
          image={
            "https://ciudaddemendoza.gob.ar/wp-content/uploads/2016/10/sliderhome.jpg"
          }
          pickPoints={mendoza.length}
        />
        <PopLocationCard
          cityName={"Buenos Aires"}
          image={
            "https://www.infobae.com/new-resizer/X3u6URzfxxPCbh8gW4xAZj3nKpo=/992x558/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/EWRWZLV7FZEM7C24TIEPFBJCP4.jpg"
          }
          pickPoints={bairestotal}
        />
        <PopLocationCard
          cityName={"Cordoba"}
          image={
            "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/11/andres-landeau.jpg"
          }
          pickPoints={cordoba.length}
        />
        <PopLocationCard
          cityName={"Mendoza"}
          image={
            "https://ciudaddemendoza.gob.ar/wp-content/uploads/2016/10/sliderhome.jpg"
          }
          pickPoints={mendoza.length}
        />
      </div>
    </div>
  );
}
