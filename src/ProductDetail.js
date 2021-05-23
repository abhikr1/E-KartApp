
import React from 'react';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
    }
     categoriesClick = (productid) => {
        const res = fetch(`/api/cart/${productid}`, {
          method: 'POST',
          body: JSON.stringify({}),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          }
        }).then(res => {
          if(res.ok === true)
          this.getCartCount()

        }
            
      
        );
      
      }
     getCartCount = () => {
        fetch(`/api/cart/getcount`)
            .then(response => response.json()).then(
                    data => {
                      this.props.updateCartCount(data.itemcount);
                    }
                )
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
    <button class = "addtocartbutton" onClick={() => this.categoriesClick(this.props.id)}><span class = "addtocarttext">ADD TO CART</span></button>
    
  
    </div>
    </div>
  </div>
  
  </div>
        
        );
    }
  }





  export default ProductDetail;