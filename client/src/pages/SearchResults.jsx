import './styles/SearchList.modules.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarTypes } from '../redux/carsResults.js';
// import LeftContainer from '../components/SearchResults/leftContainer';
import SideBar from '../components/SearchResults/SideBar/SideBar';
import CarDetailCard from '../components/SearchResults/carDetailCard';
import CarTypeTopFilter from '../components/SearchResults/carTypeTopFilter';
import { AnimatePresence } from 'framer-motion';

export const SearchList = () => {
  const {
    carTypes,
    filters: { transmission, carCategory, airConditioning, fourPlusSeats },
  } = useSelector((state) => state.carsResults);
  const { pickupLocation } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();

  const categories = [];
  for (const category in carCategory) {
    if (carCategory[category]) {
      categories.push(category);
    }
  }

  useEffect(() => {
    dispatch(fetchCarTypes(pickupLocation));
  }, []);

  return (
    <div>
      <div className='searchSummary'>DATE EDIT</div>
      <div className='listContainer'>
        <div className='listWrapper'>
          <SideBar />
          {/* <LeftContainer /> */}
          <div className='listResult'>
            <div className='listTitle'>
              <h1>Bogotá: 65 cars available</h1>
            </div>
            <CarTypeTopFilter />
            <AnimatePresence>
              {carTypes
                .filter((carType) =>
                  transmission
                    ? carType.transmission.toLowerCase() === transmission
                    : true
                )
                .filter((carType) =>
                  airConditioning ? carType.air_conditioning : true
                )
                .filter((carType) => {
                  return fourPlusSeats ? carType.seats >= 4 : true;
                })
                .filter((carType) =>
                  categories.length
                    ? categories.includes(carType.class_name.toLowerCase())
                    : true
                )
                .map((carType) => (
                  <CarDetailCard cartype={carType} key={carType.id} />
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
