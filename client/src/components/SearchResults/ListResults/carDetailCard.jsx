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
    large_suitcase: largeSuitcase,
    small_suitcase: smallSuitcase,
  } = props.cartype;

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={variants}
      layoutId={id}
    >
      <div className={styles.searchItem}>
        <div className={styles.imageContainer}>
          <img src={img} alt='' className={styles.siImg} />
        </div>

        <div className={styles.siDesc}>
          <div className={styles.siRating}>
            <span>Top Pick</span>
          </div>
          <div className={styles.siTitle}>
            <h3>
              {`${make} ${model}`} <span>or similar small car</span>{' '}
            </h3>
          </div>

          <div className={styles.siCarDesc}>
            <span className=''>{seats} Seats </span>
            <span className=''>{transmission} </span>
            <span className=''>{largeSuitcase} Large bag </span>
            <span className=''>{smallSuitcase} Small bag </span>
            <span className=''>{mpg} mpg</span>
          </div>

          <div className={styles.siLocation}>
            <span className={styles.siFeatures}>Location</span>
          </div>
        </div>
        <div className={styles.siDetails}>
          <div className={styles.siDetailTexts}>
            <span className={styles.siDaysxPrice}>Price for 3 days:</span>
            <span className={styles.siPrice}> US$112.07</span>
            <span className={styles.siAmendments}>free amendments</span>

            <button className={styles.siCheckButton}>View deal</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default carDetailCard;
