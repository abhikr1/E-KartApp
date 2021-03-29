import React from 'react';

import Header from './Header';
import Categories from './Categories';
import './Product.css';

class ProductListingPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render (){
        const src = this.props.title;
        console.log(this.props.id);
        const image = `/images/${src}.jpeg`;
        const imggg = "/images/iphone11.jpeg";
        return (
            <div class="grid-item" onClick={() => categoriesClick(this.props.id)}>   

<img src = {imggg} height="100" alt="NotAvailable"></img>{this.props.title} {this.props.price} {this.props.description}

</div>
        
        );
    }
}

    const categoriesClick = (productid) => {
      console.log("hello")
        console.log('dsjvjvnvx');
        console.log(`hi ${productid}`);
        return (
          window.location = `/products/${productid}`
       );
      
      }
    

class ProductLists extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        products: [],
      };
  
      this.getRandomUsers = this.getRandomUsers.bind(this);
    }
  
    async getRandomUsers() {
      const res = await fetch(`/api/products/category/${this.props.match.params.cartegoryname}`);
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
             <Header/>
            <Categories/>
            {(this.state.products).map((product) => (
                <ProductListingPage
                title={product.title}
                price={product.price.mrp}
                description={product.description}
                id = {product._id}
                />


              ))}

            </div>
        );
    }
  }







// class ProductLists extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   componentDidMount() {
//       fetch(`/api/products/category/${this.props.match.params.cartegoryname}`)
//         .then(response => response.json())
//         .then(response => {
//             console.log(response)
//             console.log("aaaa");
//             const jsonres = response;
//             console.log(response);
//             this.setState({developer: response});

//         });
//     }

//     render() {
//         console.log(this.state.developer);
//         return (
            
//             <div>
//                 {this.state.developer.map((userinfo)=> {
//                     return <h1>{userinfo.quantity}</h1>
//                 })};
                
//                 </div>
//         );
//     }
// }


// import React from 'react';

// class DeveloperProfile extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     componentDidMount() {
//         fetch(`/api/developers/${this.props.match.params.developerId}`)
//         .then(response => response.json())
//         .then(response => {
//             this.setState({developer: response});
//         });
//     }

//     render() {
//         return (
//             <div>Developer data: {JSON.stringify(this.state.developer)}</div>
//         );
//     }
// }

// export default DeveloperProfile;

//   onInput = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   }
  
//   onUpdate = () => {
//     const { firstName, lastName } = this.state;
//     fetch('/api/users/me', {
//       method: 'PUT',
//       body: JSON.stringify({ firstName, lastName }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//       }
//     }).then(res => {
//       if (res.status === 204) {
//         window.location = '/profile';
//       }
//     });
//   }

//   onLogout = () => {
//     fetch('/api/sessions/me', {
//       method: 'DELETE'
//     }).then(res => {
//       if (res.status === 204) {
//         window.location = '/';
//       }
//     });
//   }

//   render() {
//     return (<div className="Profile">
//         <div>Email: {this.state.email}</div>
//           <div>First Name: <input name="firstName" onInput={this.onInput} value={this.state.firstName || ''}></input></div>
//           <div>Last Name: <input name="lastName" onInput={this.onInput} value={this.state.lastName || ''}></input></div>
//           <div><input type="button" onClick={this.onUpdate} value="Update"></input></div>
//           <div><input type="button" onClick={this.onLogout} value="Logout"></input></div>
//       </div>);
//   }
// }

export default ProductLists;
