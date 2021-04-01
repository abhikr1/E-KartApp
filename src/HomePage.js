import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import Categories from "./Categories"
import Product from "./Product"
import NavBar from "./NavBar"
import Deals from "./Deals";

const HomePage = () => {

    return (
      <div className="App">
        <NavBar/>
        <Banner/>
        <Deals/>
        <Product/>
        <Footer /> 
      </div>
    );
  }


export default HomePage;