import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import ProductLists from './ProductLists';
import ProductDetails from './ProductDetails';
import MyCart from './MyCart';
import AddtoCart from './AddtoCart';

function App() {
  return (
      <Router>
          <Switch>
          <Route exact path='/'  component={HomePage} />

          <Route exact path="/products/category/:cartegoryname" component={ProductLists} />
          <Route exact path="/products/:productid" component={ProductDetails} />
          <Route exact path="/cart/cartitems" component={MyCart} />
          <Route exact path="/cart/:productid" component = {AddtoCart} />
          </Switch>
      </Router>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);



{/* <Router>
{/* A <Switch> looks through its children <Route>s and
    renders the first one that matches the current URL. */}
{/* <Switch>
  <Route exact path="/" component={LoginPage} />
  <Route exact path="/profile" component={Profile} />
</Switch>
</Router>  */}