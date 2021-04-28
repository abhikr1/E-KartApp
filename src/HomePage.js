import React, { useState } from 'react';
import Footer from "./Footer";
import Banner from "./Banner";
import Categories from "./Categories"
import Product from "./Product"
import NavBar from "./NavBar"
import Deals from "./Deals";

class HomePage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        cartCount : 0,
      };
  }
  render (){

    return (
      <div className="App">
        <NavBar cartCount={this.state.cartCount} updateCartCount={this.updateCartCount} />
        <Banner/>
        <Deals/>
        <Product/>
        <Footer /> 
      </div>
    );
  };
   updateCartCount = (count) => {

    this.setState({cartCount : count});
  }

}
export default HomePage;