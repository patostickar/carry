import SideBar from "../components/SearchResults/SideBar/SideBar";
import ListResult from "../components/SearchResults/ListResults/ListResult";
import styles from "./styles/SearchResults.module.css";
import TabTitle from "../components/GeneralFuntions/TabTitle";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const SearchList = () => {
  TabTitle("Busquedas");
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className={styles.searchResultsContainer}>
        <div className={styles.searchBarPosition}></div>
        <div className={styles.listContainer}>
          <SideBar />
          <ListResult location={location.state} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchList;
