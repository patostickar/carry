import SearchBarJumbo from '../components/Home/SearchBarJumbo';
import PopularLocations from '../components/Home/PopularLocations';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import TabTitle from '../components/GeneralFuntions/TabTitle';
import styles from './styles/Home.module.css';

const Home = () => {
  TabTitle('Inicio - Carry');
  return (
    <div className={styles.homeContainer}>
      <SearchBarJumbo />
      <PopularLocations />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
