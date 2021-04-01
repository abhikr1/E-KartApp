import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import ProductLists from './ProductLists';
import ProductDetails from './ProductDetails';
import MyCart from './MyCart';
import AddtoCart from './AddtoCart';
import Shipping from './Shipping';
import PlaceOrder from './PlaceOrder';
import Payment from './Payment';
import Order from './Order'
function App() {
  return (
      <Router>
          <Switch>
          <Route exact path='/'  component={HomePage} />

          <Route exact path="/products/category/:cartegoryname" component={ProductLists} />
          <Route exact path="/products/:productid" component={ProductDetails} />
          <Route exact path="/cart/cartitems" component={MyCart} />
          <Route exact path="/cart/:productid" component = {AddtoCart} />
          <Route exact path="/shipping" component = {Shipping} />
          <Route exact path="/placeorder" component = {PlaceOrder} />
          <Route exact path="/orders/:id" component = {Order} />

          
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