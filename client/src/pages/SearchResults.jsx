import './styles/SearchList.modules.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarTypes } from '../redux/carsResults.js';
import LeftContainer from '../components/SearchResults/leftContainer';
import CarDetailCard from '../components/SearchResults/carDetailCard';
import CarTypeTopFilter from '../components/SearchResults/carTypeTopFilter';

export const SearchList = () => {
  const { carTypes, filters } = useSelector((state) => state.carsResults);
  const { pickupLocation } = useSelector((state) => state.searchBar);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarTypes(pickupLocation));
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
            {carTypes
              .filter((carType) =>
                filters.length
                  ? // con every tiene que pasar todos los filtros
                    // con some con pasar alguno alcanza (no sirve, porque por ahí tenés un manual sin aire, pero aunque pongas con aire, si está seleccionado manual igual va a aparecer)
                    filters.some((filter) =>
                      carType[filter.key].includes(filter.value)
                    )
                  : true
              )
              .map((carType) => (
                <CarDetailCard cartype={carType} key={carType.id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchList;
