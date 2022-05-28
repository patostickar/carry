import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarTypes } from '../redux/carsResults.js';
import SideBar from '../components/SearchResults/SideBar/SideBar';
import ListResult from '../components/SearchResults/ListResult/ListResult.jsx';
import './styles/SearchList.modules.css';

export const SearchList = () => {
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
          <SideBar />
          <ListResult />
        </div>
      </div>
    </div>
  );
};

export default SearchList;
