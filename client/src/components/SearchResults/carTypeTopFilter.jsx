import React from 'react';

function carTypeTopFilter() {
  return (
    <div className='carTypeTopFilter'>
      <ul>
        <li>
          <button>
            <div className='categoryMiniCard'>
              <img
                src='https://cdn2.rcstatic.com/images/car_images/web/fiat/500_lrg.jpg'
                alt=''
              />
              <span>Small</span>
            </div>
          </button>
        </li>
        <li>
          <button>
            <div className='categoryMiniCard'>
              <img
                src='https://cdn2.rcstatic.com/images/car_images/web/ford/fiesta_lrg.jpg'
                alt=''
              />
              <span>Medium</span>
            </div>
          </button>
        </li>
        <li>
          <button>
            <div className='categoryMiniCard'>
              <img
                src='https://cdn2.rcstatic.com/images/car_images/web/vauxhall/insignia_lrg.jpg'
                alt=''
              />
              <span>Large</span>
            </div>
          </button>
        </li>
        <li>
          <button>
            <div className='categoryMiniCard'>
              <img
                src='https://cdn2.rcstatic.com/images/car_images/web/bmw/x1_lrg.jpg'
                alt=''
              />
              <span>SUVs</span>
            </div>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default carTypeTopFilter;
