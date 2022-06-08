import SideBar from '../components/SearchResults/SideBar/SideBar';
import ListResult from '../components/SearchResults/ListResults/ListResult';
import styles from './styles/SearchResults.module.css';
import TabTitle from '../components/GeneralFuntions/TabTitle';

export const SearchList = () => {
  TabTitle('Busquedas - Carry');

  return (
    <div className={styles.searchResultsContainer}>
      <div className={styles.searchBarPosition}></div>
      <div className={styles.listContainer}>
        <SideBar />
        <ListResult />
      </div>
    </div>
  );
};

export default SearchList;
