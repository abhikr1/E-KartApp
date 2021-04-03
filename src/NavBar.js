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
let temp = "";
const loggedInUser = localStorage.getItem("user");
let logout;
if (loggedInUser) {
  temp = "Hello, " + loggedInUser;
  logout = "Logout"
}
else{
  temp  = "LogIn/SignUp";
}
  return (
      <header class="navbar">
        <div class="companyLogo" onClick={logoclick}><img src = "/images/logo3.png" width = "40" height = "40" /></div>
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
    {/* <span class="login" onClick={onLoginClick}>Login</span>
    <span style={{margin: "0 10px 0 10px"}}>/</span>
    <span class="signup">Signup</span> */}
    
        <div class="options-nav" ><img src= "/images/profileicon.png"/>
        <div class="contents">
          <span class = "box" onClick={loginclick}>{temp}</span>
          <span class = "box" onClick = {orderclick}>Orders</span>
          <span class = "box">Contact Us</span>
          <span class = "box" onClick={logoutclick}>{logout}</span>
          </div>
      </div>

<div>
    <span class="cart-icon" onClick={cartClick}><img src= "/images/cart.png"/></span>
    <span class="">Cart</span>
</div>  
{/* <div class = "cart-icon"   onClick={() => cartClick()}><img src= "/images/cart.png"/></div>Cart</div> */}
</header> 
    );
}
const orderclick = () => {
  return (
    window.location = `/order/myorders`
 );

}
const logoutclick = () => {
  localStorage.clear();
  fetch('/api/sessions/me', {
    method: 'DELETE'
  }).then(res => {
    if (res.status === 204) {
      window.location = '/';
    }
  });
}
const logoclick = () => {
  return(
    window.location = '/'
  )

}
const loginclick = () => {
  return(
    window.location = '/login'
  )

}
const cartClick = () => {
    console.log('dsjvjvnvx');
    return (
      window.location = `/cart/cartitems`
   );
  
  }

  export default NavBar;