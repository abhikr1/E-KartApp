
import React from 'react';
import NavBar from './NavBar'
import './MyCart.css'

class  MyCarts extends React.Component {
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
  <button class = "removefromcartbutton" onClick={() => onRemoveClick(this.props.id)} >REMOVE</button>
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
const onRemoveClick = (productid) => {
    fetch(`/api/cart/${productid}`, {
      method: 'DELETE'
    }).then(res => {
      if (res.status === 204) {
        window.location = '/';
      }
    });
  }
const categoriesClick = () => {
console.log("GGGGGGGG")
    return (
      window.location = "/shipping"
   );
  
  }
class MyCart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
        price : {},
        info: {},
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      const res = await fetch(`/api/cart/cartitems`);
      const data = await res.json();
      // console.log(data._id)
      // console.log(data.items[0].productId)
      return data;
    }
  
    async componentDidMount() {
    console.log("Helllo");
      const cart = await this.getRandomUsers();

      //console.log(cart)
      this.setState({ items : cart.items });
      this.setState({price : cart})
      if(this.state.items){
          this.setState({info: "A"});
      }

      //console.log(this.state.items);
    }


    render() {
      if(this.state.items || this.state.items.length ){
        return (
            <div>
              <NavBar/>
              <div class="grid-container22">   
              <div class = "grid-items1">
                {(this.state.items.map((eachitem) => (
                <MyCarts
                id = {eachitem.productId}
                name = {eachitem.name}
                title = {eachitem.title}
                quantity = {eachitem.quantity}
                price = {eachitem.productprice}
                />
                )))}
                </div>
                <div class = "grid-items2">
                <div><h3>Total Amount : Rs. {this.state.price.totalprice}</h3></div>
                <button class = "addtocartbutton" onClick={() => categoriesClick()}>PLACE ORDER</button>

                </div>
                </div>
         </div>
        );
        }
        else{
          return (
            <div>
            <NavBar/>
            <div class = "emptyorder">
                <div><strong>You have an empty cart. Hurry Up!!!</strong></div>
            </div>
            </div>
            )
        }
    }
  }
  export default MyCart;