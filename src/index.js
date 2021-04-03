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
import LoginPage from './LoginPage';
import SignUp from './SignUp'
import Orders from './Orders'
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
          <Route exact path="/login" component = {LoginPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/order/myorders" component={Orders} />
          
          </Switch>
      </Router>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
);