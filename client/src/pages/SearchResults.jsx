import SideBar from '../components/SearchResults/SideBar/SideBar';
import ListResult from '../components/SearchResults/ListResults/ListResult';
import styles from './styles/SearchResults.module.css';
import TabTitle from '../components/GeneralFuntions/TabTitle';
import { useLocation } from 'react-router-dom';

export const SearchList = () => {
  TabTitle('Busquedas - Carry');
const location = useLocation()
  return (
    <div className={styles.searchResultsContainer}>
      <div className={styles.searchBarPosition}></div>
      <div className={styles.listContainer}>
        <SideBar />
        <ListResult location={location.state}/>
      </div>
    </div>
  );
};

export default SearchList;
