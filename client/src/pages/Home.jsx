import SearchBar from "../components/SearchBar/SearchBar";
import PopularLocations from "../components/PopularLocations";
import FAQ from "../components/FAQ";
import { Footer } from "../components/Footer.jsx";
import { TabTitle } from "../components/GeneralFuntions/GeneralFuntions";
import "./styles/Home.module.css";
import Testimonials from "../components/Testimonials";

const Home = () => {
  TabTitle("Inicio - Carry");
  return (
    <div>
      <SearchBar />
      <PopularLocations />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
