import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import PopularLocations from '../components/PopularLocations';
import FAQ from '../components/FAQ';
import { TabTitle } from '../components/GeneralFuntions/GeneralFuntions';
import './styles/Home.module.css';


const Home = () => {
  TabTitle('Inicio - Carry');
  return (
    <div>
      <SearchBar />
      <PopularLocations />
      <FAQ />
    </div>
  );
};

export default Home;
