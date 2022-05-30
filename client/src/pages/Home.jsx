import SearchBarJumbo from '../components/SearchBarJumbo';
import PopularLocations from '../components/PopularLocations';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer.jsx';
import { TabTitle } from '../components/GeneralFuntions/GeneralFuntions';

const Home = () => {
  TabTitle('Inicio - Carry');
  return (
    <div>
      <SearchBarJumbo />
      <PopularLocations />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
