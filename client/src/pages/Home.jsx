import SearchBarJumbo from '../components/Home/SearchBarJumbo';
import PopularLocations from '../components/Home/PopularLocations';
import Testimonials from '../components/Home/Testimonials';
import FAQ from '../components/Home/FAQ';
import { TabTitle } from '../components/GeneralFuntions/GeneralFuntions';

const Home = () => {
  TabTitle('Inicio - Carry');
  return (
    <div>
      <SearchBarJumbo />
      <PopularLocations />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
