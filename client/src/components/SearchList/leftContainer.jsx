import React from 'react';

function LeftContainer() {
  return (
    <div className='leftContainer'>
      <div className='googleMap'>IFRAME GOOGLE MAP</div>
      <div className='listFilter'>
        <div className='filterTitle'>
          <h1 className='lsTitle'>Filter</h1>
          <span className='clearfilter'>Clear all filters</span>
        </div>
        <div className='lsItem'>
          <label htmlFor=''>Location (Bogotá)</label>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Airport (in terminal)</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Airport (meet & greet)</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Airport (shuttle)</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Airport (car rental centre)</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>All other locations</span>
          </div>
        </div>

        <div className='lsItem'>
          <label htmlFor=''>Price Range</label>
          <div className='inputItem'>
            <span>US$100 - US$380</span>
            <div>
              <input
                type='range'
                min='100'
                max='370'
                aria-valuetext='100-380'
                aria-label='Minimum price'
              />
            </div>
          </div>
        </div>

        <div className='lsItem'>
          <label htmlFor=''>Car specs</label>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Air Conditioning</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>4+ doors</span>
          </div>
        </div>

        <div className='lsItem'>
          <label htmlFor=''>Mileage/Kilometres</label>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Unlimited</span>
          </div>
        </div>

        <div className='lsItem'>
          <label htmlFor=''>Transmission</label>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Manual</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Automatic</span>
          </div>
        </div>

        <div className='lsItem'>
          <label htmlFor=''>Car category</label>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Small</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Medium</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Large</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>SUVs</span>
          </div>
        </div>

        <div className='lsItem'>
          <label htmlFor=''>Fuel policy</label>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Like for like</span>
          </div>
        </div>

        <div className='lsItem'>
          <label htmlFor=''>Supplier</label>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Alamo</span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Confort </span>
          </div>
          <div className='inputItem'>
            <input type='checkbox' />
            <span>Europcar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftContainer;
