import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBookingDetails } from "../../../redux/booking";
import { DAY_MILISECONDS } from "../../GeneralFuntions/constants";
import { motion } from "framer-motion";
import styles from "./styles/carDetail.module.css";
import PersonIcon from "@mui/icons-material/Person";
import SpeedIcon from "@mui/icons-material/Speed";
import LuggageIcon from "@mui/icons-material/Luggage";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const carDetailCard = (props) => {
  const {
    id,
    make,
    model,
    transmission,
    mpg,
    img,
    seats,
    className,
    largeSuitcase,
    smallSuitcase,
    price,
  } = props.cartype;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { location, pickupDate, dropoffDate } = useSelector(
    (state) => state.searchBar
  );

  const dateRange = (dropoffDate - pickupDate) / DAY_MILISECONDS;

  function handleBooking() {
    const booking = {
      carType: make + " " + model,
      carSeats: seats,
      carTransmission: transmission,
      carMpg: mpg,
      carImg: img,
      carClass: className,
      carLargeSuitcase: largeSuitcase,
      carSmallSuitcase: smallSuitcase,
      carPrice: price,
      carTypeId: id,
      locationId: location.id,
      pickUpDate: new Date(pickupDate).toUTCString().slice(0, 10),
      dropOffDate: new Date(dropoffDate).toUTCString().slice(0, 10),
    };
    dispatch(setBookingDetails(booking));
    navigate("/reservation");
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
      layoutId={id}
    >
      <div className={styles.carCard}>
        <div className={styles.imageContainer}>
          <img src={img} alt="" className={styles.siImg} />
        </div>

        <div className={styles.siDesc}>
          <div className={styles.siRating}>
            <span>Top Pick</span>
          </div>
          <div className={styles.siTitle}>
            <h3>
              {`${make} ${model}`} <span>o un coche {className} similar</span>{" "}
            </h3>
          </div>

          <div className={styles.siCarDesc}>
            <div>
              <span className="">
                <PersonIcon /> {seats} Asientos{" "}
              </span>
            </div>
            <div>
              <span className="">
                <LuggageIcon /> {largeSuitcase} Maleta grande{" "}
              </span>
            </div>
            <div>
              <span className="">
                <WorkIcon /> {smallSuitcase} Maleta pequeña{" "}
              </span>
            </div>

            <div>
              <span className="">
                <SpeedIcon /> {mpg} km/l
              </span>
            </div>
          </div>

          <div className={styles.siLocation}>
            <span className={styles.siFeatures}>
              <BuildIcon /> {transmission}
            </span>
          </div>
        </div>
        <div className={styles.siDetails}>
          <div className={styles.siDetailTexts}>
            <span className={styles.siDaysxprice}>
              Precio por {dateRange} {dateRange === 1 ? "día" : "días"}:
            </span>
            <span className={styles.siprice}>$ {price}</span>
            <span className={styles.siAmendments}>Cancelación gratuita</span>

            <button className={styles.siCheckButton} onClick={handleBooking}>
              Ver oferta
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default carDetailCard;
