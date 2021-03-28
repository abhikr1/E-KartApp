import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import ProductLists from './ProductLists';
import ProductDetails from './ProductDetails';
import MyCart from './MyCart';

function App() {
  return (
      <Router>
          <Switch>
          <Route exact path="/products/category/:cartegoryname" component={ProductLists} />
          <Route exact path="/products/:productid" component={ProductDetails} />
          <Route exact path="/mycarts" component={MyCart} />

              <Route exact path='/'  component={HomePage} />
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