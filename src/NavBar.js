import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function SearchBar(){
  return (<div class="SearchBar">
    <div className="SearchIconWrapper"><img className="SearchIcon" src='/images/search-24px.svg' alt='searchIcon'/></div>
    <input className="SearchInput" type="text" placeholder="Search for products, brands and more..."></input>

    </div>);
}
function NavBar(){
  const onLoginClick = () =>{
    return (
      window.location = '/login'
    );
  }
  const categoriesClick = (category) => {
    console.log('dsjvjvnvx');
    console.log(`hi ${category}`);
    return (
      window.location = `/products/category/${category}`
   );
  
  }
  return (
    
      <header class="navbar">
        <div class="companyLogo"><a href="https://my-utility-tools.netlify.app/" target="_blank"><img src = "/images/logo3.png" width = "40" height = "40" /></a></div>
    <div class = "category" onClick={() => categoriesClick('Men')}>
        MEN
    </div>
    <div class = "category">
        WOMEN
    </div>
    <div class = "category"> 
        SPORTS
    </div>
  <SearchBar/>
  <div>
    <span class="login" onClick={onLoginClick}>Login</span>
    <span style={{margin: "0 10px 0 10px"}}>/</span>
    <span class="signup">Signup</span>
</div>  

<div class = "cart-icon"   onClick={() => cartClick()}>
<img src= "/images/cart.png"/>
</div>
</header>
    );
}

const cartClick = () => {
    console.log('dsjvjvnvx');
    return (
      window.location = `/cart/cartitems`
   );
  
  }

export default NavBar;