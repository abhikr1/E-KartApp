
import React from 'react';
import Header from './Header';
import Categories from './Categories';
import NavBar from './NavBar';


class ProductDetail extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
      const src = this.props.name;
      const image = `/images/${src}.jpg`;
      const imggg = "/images/iphone11.jpeg";
      return (
        <div class="grid-container">   

<img src = {image} height="100" alt="NotAvailable" height = "600px" widht = "150px"></img><h4>{this.props.title}</h4> <h4>{this.props.price}</h4> {this.props.description}

<div>
<button onClick={() => categoriesClick(this.props.id)}>Add to Cart</button>

</div>
</div>

      
      );
  }
}
const categoriesClick = (productid) => {
  return (
    window.location = `/cart/${productid}`
 );

}

class ProductDetails extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        product: [],
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
      const res = await fetch(`/api/products/${this.props.match.params.productid}`);
      const data = await res.json();
      return data;
    }
  
    async componentDidMount() {
      const product = await this.getRandomUsers();
      this.setState({ product });
    }

   
    render() {
        return (
            <div>
              <NavBar/>
                   {(this.state.product).map((prod) => (
                <ProductDetail
                title={prod.title}
                price={prod.price.mrp}
                description={prod.description}
                id = {prod._id}
                name = {prod.name}
                />


              ))}
         </div>
        );
    }
  }
  export default ProductDetails;