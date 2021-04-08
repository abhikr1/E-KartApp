
import React from 'react';
import Categories from './Categories';
import NavBar from './NavBar';
import './Orders.css';

class Order extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
        const src = this.props.title;
        console.log(this.props.id);
        const image = `/images/${this.props.id}.jpg`;
         let orderdate = (new Date(this.props.createdDate)).toString();
        orderdate = orderdate.substring(0, 25);
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
          <div><strong>Order placed on : {orderdate}</strong></div>

           <strong>Price : Rs. {this.props.productprice}</strong> 
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
        if(this.state.orders.length !== 0){
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
                productprice = {item.productprice}
                createdDate = {order.createdAt}
                />
                ))
              )
              )
              }
              </div>
        );
    }
    else{
        return (
            <div>
            <NavBar/>
            <div class = "emptyorder">
                <div><strong>You don't have any orders yet!!!</strong></div>
            </div>
            </div>
            )

    }

  }
}
  export default Orders;