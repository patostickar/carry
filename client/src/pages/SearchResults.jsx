import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarTypes } from '../redux/carsResults.js';
import SearchBar from '../components/SearchBar/SearchBar';
import SideBar from '../components/SearchResults/SideBar/SideBar';
import ListResult from '../components/SearchResults/ListResults/ListResult.jsx';
import styles from './styles/SearchResults.module.css';

export const SearchList = () => {
  const { pickupLocation } = useSelector((state) => state.searchBar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarTypes(pickupLocation));
  }, []);

  return (
    <div className={styles.searchResultsContainer}>
      <div className={styles.searchBarPosition}>
        <SearchBar />
      </div>
      <div className={styles.listContainer}>
        <SideBar />
        <ListResult />
      </div>
    </div>
  );
};

export default SearchList;
