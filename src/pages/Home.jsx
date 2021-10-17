import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { useHistory } from "react-router-dom";


const Home = () => {
  return (
    <div >
      <Navbar />
      <Slider />
      <Products/>
    </div>
  );
};

export default Home;
