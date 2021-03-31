
import React from 'react';
import Header from './Header';
import Categories from './Categories';


class  MyCarts extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
      console.log("hhhh")
      const src = this.props.title;
      console.log("llll")
      console.log(this.props.id);
      const image = `/images/${src}.jpg`;
      return (
          <div class="grid-item">   

<img src = {image} height="100" alt="NotAvailable"></img>{this.props.id} --- {this.props.quantity}  --{this.props.price}
{/* <button onClick={() => categoriesClick(this.props.id)}>Add to Cart</button> */}
</div>
      );
  }
}
const categoriesClick = (productid) => {
    console.log('dsjvjvnvx');
    console.log(`hi ${productid}`);
    return (
      window.location = `/cart/mycart`
   );
  
  }
class MyCart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        items: [],
        price : {}
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
      //console.log(this.state.items);
    }

   
    render() {
      //console.log("ggggg")
      let arr = [];
      //console.log(arr);
      // console.log(this.state.items[0])
      let ar = [];
      ar[0] = "aa";
      ar[1] = "bb";
      console.log("www");

        return (
            <div>
              <Header/>
              <Categories/>
              
                {(this.state.items.map((eachitem) => (
                <MyCarts
                id = {eachitem.productId}
                quantity = {eachitem.quantity}
                price = {eachitem.productprice}
                />
                )))}
                <div><h1>Total Price ---- {this.state.price.totalprice}</h1></div>
         </div>
        );
    }
  }
  export default MyCart;