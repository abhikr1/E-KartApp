
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
      console.log(this.props.id);
      const image = `/images/${src}.jpg`;
      return (
          <div class="grid-item">   

<img src = {image} height="100" alt="NotAvailable"></img>{this.props.id}
<button onClick={() => categoriesClick(this.props.id)}>Add to Cart</button>
</div>
      );
  }
}
const categoriesClick = (productid) => {
    console.log('dsjvjvnvx');
    console.log(`hi ${productid}`);
    return (
      window.location = `/cart/mycartnew`
   );
  
  }
class MyCart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        cart: [],
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      const res = await fetch(`/api/cart/mycart`);
      const data = await res.json();
      console.log(data);
      return data;
    }
  
    async componentDidMount() {
    console.log("Helllo");
      const cart = await this.getRandomUsers();
      this.setState({ cart });
      console.log()
    }

   
    render() {
        return (
            <div>
              <Header/>
              <Categories/>
                <MyCarts
                id={this.state.cart._id}
                />


              
         </div>
        );
    }
  }
  export default MyCart;