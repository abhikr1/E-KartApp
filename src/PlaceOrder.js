import React from 'react';
import {Dummy} from './Dummy'
import {initiatePayment} from './Payment'
class PlaceOrder extends React.Component {
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
                    
                    <button type="" class="btn btn-primary" onClick={() => categoriesClick()}>Proceed to Pay</button>
            </div>
        );
    }
  }
  const categoriesClick = () => {
    console.log("hHHHHelllloooo");
      const paymentHandlers = {
        onSuccess : (options) => {
          fetch(`/api/orders/${options}`, {

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
  export default PlaceOrder;