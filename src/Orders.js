
import React from 'react';
import Header from './Header';
import Categories from './Categories';
import NavBar from './NavBar';

class Order extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
        console.log("hhhh")
        const src = this.props.title;
        console.log("llll")
        console.log(this.props.id);
        const image = `/images/${this.props.id}.jpg`;
        return (
          <div class="grid-container33">   
                <div class = "grid-items3">
      <img src = {image} height="100" alt="NotAvailable" height="200px" width = "150px"></img>
      </div>
      <div class = "grid-items3">
      <div class="grid-container44">   
      <div class = "grid-items4">
        <div>
          <strong>{this.props.name}</strong>
        </div>
        <br>
        </br>
        <div>
          <strong>{this.props.title}</strong>
        </div>
        <br>
        </br>
  
  
      <span>Quantity: {this.props.quantity}</span>
      <div class = "test">
  <span>
    </span>
    </div>
      </div>
      <div class = "grid-items5">
           <strong>Price : Rs. {this.props.price}</strong> 
        </div>
      </div>
  
  
    </div>
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
                order.items.map((item) => (
                <Order
                status={order.status}
                amount={order.amount}
                title = {item.title}
                quantity = {item.quantity}
                price = {order.amount}
                id = {item.productId}
                name = {item.name}
                />
                ))
              )
              )
              }
              </div>
        );
    }
  }
  export default Orders;