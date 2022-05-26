import './styles/SearchList.modules.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarTypes } from '../redux/carsResults.js';
import LeftContainer from '../components/SearchResults/leftContainer';
import CarDetailCard from '../components/SearchResults/carDetailCard';
import CarTypeTopFilter from '../components/SearchResults/carTypeTopFilter';

export const SearchList = () => {
  const { carTypes, filters } = useSelector((state) => state.carsResults);
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
