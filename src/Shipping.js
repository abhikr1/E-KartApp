import React from 'react';
import { render } from 'react-dom';
import NavBar from './NavBar'
import './LoginPage.css';
import {initiatePayment} from './Payment'


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
          <NavBar/>
          <div className = "grid-cont">
            <div className = "grid-j">
            </div>
            <div className = "grid-i">
            <div className= "heading">Enter Shipping Details</div>
    
            <form>
    
                <div class = "email">
                  <input class = "email" placeholder="Enter address" required="" type="text" id="address"/>

                </div>
                <div class = "password">
                <input class = "password" placeholder="Enter city" required="" type="text" id="city" />
                </div>
                <div>
                <input class = "password" placeholder="Enter postal code" required="" type="text" id="postalCode" />

                </div>
                <div>
                <input class = "password"  placeholder="Enter country" required="" type="text" id="country"/>
                </div>

              
            </form>
            <div>
                <button class ="aaa" type="submit" onClick = {() => categoriesClick()}>Proced to Pay</button>
                </div>
            </div>
            <div className = "grid-j">
              </div>
          </div>
          </div>
        );
    }

  }
    const categoriesClick = () => {
        const paymentHandlers = {
          onSuccess : (options) => {
            fetch(`/api/orders/${options.id}`, {
  
            method: 'PUT',
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(options)
            })
            .then(res => res.json())
            .then(res => {
              if(res.state > 300){
                window.location = '/orders/${options.id}'
              }
            })
          },
          onDismiss: () => {
  
          }
        }
        const onOrderCreateFailure = (err) => {
  
        }
        initiatePayment(paymentHandlers, onOrderCreateFailure);
  
        
    
    }

  
  export default Shipping;


  // <form class="" >
  // <div class="form-group" >
  //   <label class="form-label" for="address">Address</label>
  //   <input placeholder="Enter address" required="" type="text" id="address" class="form-control" />
  // </div>
  //     <div class="form-group"><label class="form-label" for="city">City</label>
  //       <input placeholder="Enter city" required="" type="text" id="city" class="form-control" />
  //     </div>
  //     <div class="form-group"><label class="form-label" for="postalCode">Postal Code</label>
  //       <input placeholder="Enter postal code" required="" type="text" id="postalCode" class="form-control" />
  //     </div>
  //     <div class="form-group"><label class="form-label" for="country">Country</label>
  //       <input placeholder="Enter country" required="" type="text" id="country" class="form-control" />
  //     </div>

  //   </form>
  //   <button type="submit" class="btn btn-primary" onClick = {() => categoriesClick()}>Continue</button>

