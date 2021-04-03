
import React from 'react';
import Header from './Header';
import Categories from './Categories';
import NavBar from './NavBar';

class Order extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){

      return (
        <div>
            {this.props.status};
        </div>
      
      );
  }
}


class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        orders: [],
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      const res = await fetch('/api/orders/myorders');
      const data = await res.json();
      return data;
    }
  
    async componentDidMount() {
      const orders = await this.getRandomUsers();
      this.setState({ orders });
      console.log(orders);
    }

   
    render() {
        return (
            <div>
              <NavBar/>
                   {(this.state.orders).map((order) => (
                <Order
                status={order.status}

                />


              ))}
         </div>
        );
    }
  }
  export default Orders;