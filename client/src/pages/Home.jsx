import SearchBarJumbo from "../components/Home/SearchBarJumbo";
import PopularLocations from "../components/Home/PopularLocations";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";
import TabTitle from "../components/GeneralFuntions/TabTitle";
import styles from "./styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  TabTitle("Inicio");
  return (
    <>
      <Navbar />
      <div className={styles.homeContainer}>
        <SearchBarJumbo />
        <PopularLocations />
        <Testimonials />
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default Home;
