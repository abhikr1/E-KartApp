
import React from 'react';
import Header from './Header';
import Categories from './Categories';


class ProductDetail extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
      const src = this.props.title;
      console.log(this.props.id);
      const image = `/images/${src}.jpeg`;
      const {imggg} = "/images/groceryicon.jpeg";
      return (
          <div class="grid-item">   

<img src = {image} height="100" alt="NotAvailable"></img>{this.props.title} {this.props.price} {this.props.description}</div>
      
      );
  }
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
      console.log(data);
      return data;
    }
  
    async componentDidMount() {
      const product = await this.getRandomUsers();
      this.setState({ product });
      console.log()
    }

   
    render() {
        return (
            <div>
              <Header/>
              <Categories/>
                {(this.state.product).map((prod) => (
                <ProductDetail
                title={prod.title}
                price={prod.price.mrp}
                description={prod.description}
                id = {prod._id}
                />


              ))}
         </div>
        );
    }
  }
  export default ProductDetails;