import React from 'react';
import './NavBar.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function SearchBar(){
  return (<div class="SearchBar">
    <div className="SearchIconWrapper"><img className="SearchIcon" src='/images/search-24px.svg' alt='searchIcon'/></div>
    <input className="SearchInput" type="text" placeholder="Search for products, brands and more..."></input>

    </div>);
}
class NavBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      cartcount: '',
    };

    this.getRandomUsers = this.getRandomUsers.bind(this);
  }

  async getRandomUsers() {
    
    const res = await fetch(`/api/cart/getcount`);
    const data = await res.json();
    if(data)
    return data.itemcount;
    else{
      return;
    }
  }
  async componentDidMount() {
    const cartcount = await this.getRandomUsers();

    if(cartcount){
    this.props.updateCartCount &&
    this.props.updateCartCount(cartcount);
    }
    else{
      this.props.updateCartCount &&
      this.props.updateCartCount(0);
    }
    //check if props has an object called update
  }

 
  render() {
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
    temp  = "Login / Signup";
  }
    return (
        <header class="navbar">
          <div class="companyLogo" onClick={logoclick}><img src = "/images/logo3.png" width = "40" height = "40" /></div>
      <div class = "category" onClick={() => categoriesClick('Men')}>
          <strong>MEN</strong>
      </div>
      <div class = "category" onClick={() => categoriesClick('Women')}>
          <strong>WOMEN</strong>
      </div>
      <div class = "category" onClick={() => categoriesClick('Kids')}>
      <strong>KIDS</strong>
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
      <span class = "cartitems">
              {this.props.cartCount}
            </span>  
            </div>
  </header> 
      );
}

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
    return (
      window.location = `/cart/cartitems`
   );
  
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  export default NavBar;