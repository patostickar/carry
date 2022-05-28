import { motion } from 'framer-motion';
import '../styles/SearchItem.modules.css';

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
      <div className='searchItem'>
        <div className='imageContainer'>
          <img src={img} alt='' className='siImg' />
        </div>

        <div className='siDesc'>
          <div className='siRating'>
            <span>Top Pick</span>
          </div>
          <div className='siTitle'>
            <h3>
              {`${make} ${model}`} <span>or similar small car</span>{' '}
            </h3>
          </div>

          <div className='siCarDesc'>
            <span className=''>{seats} Seats </span>
            <span className=''>{transmission} </span>
            <span className=''>{largeSuitcase} Large bag </span>
            <span className=''>{smallSuitcase} Small bag </span>
            <span className=''>{mpg} mpg</span>
          </div>

          <div className='siLocation'>
            <span className='siFeatures'>Location</span>
          </div>
        </div>
        <div className='siDetails'>
          <div className='siDetailTexts'>
            <span className='siDaysxPrice'>Price for 3 days:</span>
            <span className='siPrice'> US$112.07</span>
            <span className='siAmendments'>free amendments</span>

            <button className='siCheckButton'>View deal</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default carDetailCard;
