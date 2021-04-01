import React from 'react';
import { render } from 'react-dom';

function Shippings(){
    return(
        <div>
          Hello
        </div>
    )
}

class Shipping extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        product: [],
      };
  
    //   this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      
    //   const res = await fetch(`/api/products/${this.props.match.params.productid}`);
    //   const data = await res.json();
    //   return data;
    }
  
    async componentDidMount() {
    //   const product = await this.getRandomUsers();
    //   this.setState({ product });
    }


    render() {
        return (
            <div>

                <form class="" >
                <div class="form-group" >
                  <label class="form-label" for="address">Address</label>
                  <input placeholder="Enter address" required="" type="text" id="address" class="form-control" />
                </div>
                    <div class="form-group"><label class="form-label" for="city">City</label>
                      <input placeholder="Enter city" required="" type="text" id="city" class="form-control" />
                    </div>
                    <div class="form-group"><label class="form-label" for="postalCode">Postal Code</label>
                      <input placeholder="Enter postal code" required="" type="text" id="postalCode" class="form-control" />
                    </div>
                    <div class="form-group"><label class="form-label" for="country">Country</label>
                      <input placeholder="Enter country" required="" type="text" id="country" class="form-control" />
                    </div>

                  </form>
                  <button type="submit" class="btn btn-primary" onClick = {() => categoriesClick()}>Continue</button>


         </div>
        );
    }

  }
  const categoriesClick = () => {
      console.log("EEEEEEJHbkdfjsflckbkl;")
    return (
      window.location = '/placeorder'
   );
  
  }
  
  export default Shipping;