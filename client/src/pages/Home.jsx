import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Navbar } from "../components/Navbar";
import "./styles/Home.module.css";
import PopularLocations from "../components/PopularLocations";
import { TabTitle } from "../components/GeneralFuntions/GeneralFuntions";
import Testimonials from "../components/Testimonials";

const Home = () => {
  TabTitle('Inicio - Carry');
  return (
    <div>
      <SearchBar />
      <PopularLocations />
      <Testimonials />
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
