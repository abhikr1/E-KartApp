
import React from 'react';
class ProductDetails extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        products: [],
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
      const products = await this.getRandomUsers();
      this.setState({ products });
      console.log()
    }

   
    render() {
        return (
            <div>
             
                    hrlll     
         </div>
        );
    }
  }
  export default ProductDetails;