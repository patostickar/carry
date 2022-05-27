import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import './styles/Home.module.css';
import PopularLocations from '../components/PopularLocations';
import { TabTitle } from '../components/GeneralFuntions/GeneralFuntions';

const Home = () => {
  TabTitle('Inicio - Carry');
  return (
    <div>
      <SearchBar />
      <PopularLocations />
    </div>
  );
};

export default Home;
