import { Navbar } from '../components/Navbar';
import SearchBar from '../components/SearchBar/SearchBar';
import PopularLocations from '../components/PopularLocations';
import FAQ from '../components/FAQ';
import { Footer } from '../components/Footer.jsx';
import { TabTitle } from '../components/GeneralFuntions/GeneralFuntions';
import './styles/Home.module.css';

const Home = () => {
  TabTitle('Inicio - Carry');
  return (
    <div>
      <Navbar />
      <SearchBar />
      <PopularLocations />
      <Footer />
      <FAQ />
    </div>
  );
};

export default Home;
