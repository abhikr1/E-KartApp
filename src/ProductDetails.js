
import React from 'react';
import NavBar from './NavBar';
import './ProductDetail.css';
import ProductDetail from './ProductDetail.js'


class ProductDetails extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        product: [],
        cartCount : 0,
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
   updateCartCount = (cartCount) => {
     alert("XXXXXXXXXXXXXX");
     this.setState({cartCount})
     alert(this.state.cartCount);
   }
    render() {
      

      if(this.state.product || this.state.product.length !== 0){
        return (
            <div>
              <NavBar cartCount = {this.state.cartCount} updateCartCount={this.updateCartCount}/>
                   {(this.state.product).map((prod) => (
              <ProductDetail
                title={prod.title}
                price={prod.price.mrp}
                lp = {prod.price.lp}
                description={prod.description}
                id = {prod._id}
                name = {prod.name}
                updateCartCount = {this.updateCartCount}
                />

              ))}

         </div>
        );
    }
    else{
      return(
      <NavBar/>
      );

    }
  }
  }
  export default ProductDetails;