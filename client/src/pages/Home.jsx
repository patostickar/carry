import React from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import { Navbar } from '../components/Navbar';
import './styles/Home.module.css';
import PopularLocations from "../components/PopularLocations"
import { Footer } from '../components/Footer.jsx';

const Home = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <PopularLocations />
      <Footer />
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
