import React from 'react';
import './SignUp.css';
import NavBar from './NavBar'
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          firstname: '',
          lastname: '',
        };
       }
  
  

     componentDidMount() {

    }
    onSignUpClick = e =>{
        const { email, password, firstname, lastname} = this.state;
        fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, firstname, lastname }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
          });
          return(
            window.location = '/login'
          )
    }
    onInput = event => {
        this.setState({ [event.target.name]: event.target.value });
      }
   
    render() {
        return (
            <div>
            <NavBar/>
            <div className = "grid-cont2">
              <div className = "grid-j">
              </div>
              <div className = "grid-i">
              <div className= "heading">Login or SignUp</div>
      
              <form>
      
                  <div class = "email2">
                    <input class = "email2" placeholder="E-Mail" name="email" type="email" onInput={this.onInput} value={this.state.email} required></input>
                  </div>
                  <div class = "password2">
                    <input class="password2" placeholder="Password" name="password" type="password" onInput={this.onInput} value={this.state.password} required></input>
                  </div>
                  <div class = "details">
                    <input class="details" placeholder="First Name" name="firstname" type="name" onInput={this.onInput} value={this.state.firstname} required></input>
                  </div>
                  <div class = "details">
                    <input class="details" placeholder="Last Name" name="lastname" type="name" onInput={this.onInput} value={this.state.lastname} required></input>
                  </div>

                
              </form>
              <div>
                    <input class = "aaa2" type="submit" onClick={this.onSignUpClick} value="Sign Up"></input>
                  </div>
              </div>
              <div className = "grid-j">
                </div>
            </div>
            </div>
          );
        }
      }

  export default SignUp;