import { useSelector, useDispatch } from 'react-redux';
import { setBookingDetails } from '../../../redux/booking.js';
import { DAY_MILISECONDS } from '../../GeneralFuntions/constants.js';
import { motion } from 'framer-motion';
import styles from './styles/carDetail.module.css';

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
  const { location, pickupDate, dropoffDate } = useSelector(
    (state) => state.searchBar
  );

  const dateRange = (dropoffDate - pickupDate) / DAY_MILISECONDS;

  function handleBooking() {
    const booking = {
      carTypeId: id,
      customerId: null,
      locationId: location.id,
      pickUpDate: new Date(pickupDate).toISOString().slice(0, 10),
      dropOffDate: new Date(dropoffDate).toISOString().slice(0, 10),
    };
    dispatch(setBookingDetails(booking));
  }

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={variants}
      layoutId={id}
    >
      <div className={styles.carCard}>
        <div className={styles.imageContainer}>
          <img src={img} alt='' className={styles.siImg} />
        </div>

        <div className={styles.siDesc}>
          <div className={styles.siRating}>
            <span>Top Pick</span>
          </div>
          <div className={styles.siTitle}>
            <h3>
              {`${make} ${model}`} <span>o un coche {className} similar</span>{' '}
            </h3>
          </div>

          <div className={styles.siCarDesc}>
            <span className=''>{seats} Asientos </span>
            <span className=''>{largeSuitcase} Maleta grande </span>
            <span className=''>{smallSuitcase} Maleta pequeña </span>
            <span className=''>{mpg} km/l</span>
          </div>

          <div className={styles.siLocation}>
            <span className={styles.siFeatures}>{transmission}</span>
          </div>
        </div>
        <div className={styles.siDetails}>
          <div className={styles.siDetailTexts}>
            <span className={styles.siDaysxprice}>
              Precio por {dateRange} {dateRange === 1 ? 'día' : 'días'}:
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
