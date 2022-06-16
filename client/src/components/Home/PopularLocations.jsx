import { useSelector } from "react-redux";
import PopLocationCard from "./PopLocationCard";
import styles from "./styles/PopularLocations.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function PopularLocations() {
  const { locations } = useSelector((state) => state.searchBar);

  // La tomé prestada de internet, filtra uno de cada ciudad
  const popLocation = locations.filter(
    (value, index, self) =>
      index === self.findIndex((t) => t.stateName === value.stateName)
  );

  // Agrupa por ciudad
  const popLocationCount = locations.reduce(function (acc, item) {
    const key = item.stateName;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.container}>
      <div className={styles.section__title}>
        <h2>Destinos populares</h2>
      </div>
      <div className={styles.cardsContainer}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          spaceBetween={24}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
              // spaceBetween: 24,
            },
          }}
          className="mySwiper"
        >
          {popLocation.map((pl, i) => (
            <SwiperSlide key={i}>
              <PopLocationCard
                key={i}
                cityName={pl.stateName}
                agencies={popLocationCount[pl.stateName].length}
                img={pl.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
