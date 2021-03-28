import React, { useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Banner from "./Banner";
import Categories from "./Categories"
import Product from "./Product"

const HomePage = () => {

    return (
      <div className="App">
        <Header/>
        <Categories/>
        <Banner/>
        <Product/>
        <Footer /> 
      </div>
    );
  }


export default HomePage;