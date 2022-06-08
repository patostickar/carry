import SearchBarJumbo from '../components/Home/SearchBarJumbo';
import PopularLocations from '../components/Home/PopularLocations';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import TabTitle from '../components/GeneralFuntions/TabTitle'
import styles from './styles/Home.module.css';
import { useLocation } from 'react-router-dom';

const Home = () => {

  const location = useLocation()
console.log(location);

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
