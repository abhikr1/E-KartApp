import "./Header.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./Login.js";



function Header() {
  const click = () => {
    console.log("hi");
    return (
    <Router>
      <Switch>
      <Route exact path="/" component={Login} />
      </Switch>
    </Router>
   );

}
  return (
    <header class="navbar">
    <div class="companyLogo"><a href="" target="_blank"><span class="logoY">E</span>Kart</a></div>
    
<SearchBar/>
<div>
<span class="login" onClick={click}>Login</span>
<span style={{margin: "0 10px 0 10px"}}>|</span>
</div>
<div class = "login">
  Cart
</div>
</header>
  );
}

function SearchBar(){
  console.log("AAAAAAAAAA");
  console.log("BBBBBBBBB");
  console.log("CCCCCCCCCCC");

  return (<div class="SearchBar">
    <input className="SearchInput" type="text" placeholder="Search for products..."></input>
    <div className="SearchIconWrapper"><img className="SearchIcon" src={'/images/search-24px.svg'} alt='searchIcon'/></div>
    </div>);
}



export default Header;


