import React from "react";
import SearchBar from "../components/SearchBar/SearchBar";
import { Navbar } from "../components/Navbar";
import "./styles/Home.module.css";
import PopularLocations from "../components/PopularLocations";
import { TabTitle } from "../components/GeneralFuntions/GeneralFuntions";

const Home = () => {
  TabTitle("Inicio - Carry");
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
