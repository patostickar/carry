import React from 'react';
import '../styles/SearchItem.modules.css';

export const carDetailCard = (props) => {
  const {
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
  );
};

export default carDetailCard;
