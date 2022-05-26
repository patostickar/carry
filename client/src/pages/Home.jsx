import React from 'react';
import SearchBar from '../components/SearchBar';
import {Navbar} from '../components/Navbar';
import PopularLocations from '../components/PopularLocations';
import './styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <PopularLocations />
      {/*
    navbar

    header

    main

    footer

    
     */}
    </div>
  );
};

export default Home;
