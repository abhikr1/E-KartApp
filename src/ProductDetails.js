
import React from 'react';
import NavBar from './NavBar';
import './ProductDetail.css';

class ProductDetail extends React.Component {
  constructor(props) {
      super(props);
  }
  render (){
      const src = this.props.id;
      const image = `/images/${src}.jpg`;
      const image2 = `/images/${src}_2.jpg`;
      return (
        <div>
        <div class="grid-containerdet"> 
        <div>
  <img src = {image} height="100" alt="NotAvailable" height = "600px" widht = "150px"></img>
  </div>
  <div>
  <img src = {image2} height="100" alt="NotAvailable" height = "600px" widht = "150px"></img>
  </div>
  <div>
  
  <div class = "pdp-name">{this.props.name}</div>
  <div class = "pdp-title">{this.props.title}</div> 
  <div class = "pdp-price">
  <strong>Rs. {this.props.price}          </strong>
  <span class = "pdp-mrp">
  <strike>Rs. {this.props.lp}</strike>
  </span>
  </div>
  <div class ="desc">
   {this.props.description}
   </div>
  <div class = "addtocartbutton2">
  <button class = "addtocartbutton" onClick={() => categoriesClick(this.props.id)}><span class = "addtocarttext">ADD TO CART</span></button>
  

  </div>
  </div>
</div>

</div>
      
      );
  }
}
const categoriesClick = (productid) => {
  const res = fetch(`/api/cart/${productid}`, {
    method: 'POST',
    body: JSON.stringify({}),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }).then(
    <ProductDetails/>
  );
  // const data = res.json();
  // console.log(data);
  // return data;
//   return (
//     window.location = `/cart/${productid}`
//  );

// fetch(`/api/cart/${productid}`, {
//   method: 'POST',
//   body: JSON.stringify({}),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8'
//   }
// }).then()
// )
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
      if(this.state.product || this.state.product.length !== 0){
        return (
            <div>
              <NavBar/>
                   {(this.state.product).map((prod) => (
                <ProductDetail
                title={prod.title}
                price={prod.price.mrp}
                lp = {prod.price.lp}
                description={prod.description}
                id = {prod._id}
                name = {prod.name}
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