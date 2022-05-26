import './styles/SearchList.modules.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarTypes } from '../redux/carsResults.js';
import LeftContainer from '../components/SearchList/leftContainer';
import CarDetailCard from '../components/SearchList/carDetailCard';
import CarTypeTopFilter from '../components/SearchList/carTypeTopFilter';

export const SearchList = () => {
  // const { carTypes, filters } = useSelector((state) => state.carResults);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarTypes());
  }, []);

  return (
    <div>
      <div className='searchSummary'>DATE EDIT</div>
      <div className='listContainer'>
        <div className='listWrapper'>
          <LeftContainer />
          <div className='listResult'>
            <div className='listTitle'>
              <h1>Bogotá: 65 cars available</h1>
            </div>
            <CarTypeTopFilter />
            <CarDetailCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
