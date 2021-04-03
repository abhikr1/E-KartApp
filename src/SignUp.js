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
        console.log("hellohi");
        console.log("HHHH");
        alert("JJJ");
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
            <div className = "grid-cont">
              <div className = "grid-j">
              </div>
              <div className = "grid-i">
              <div className= "heading">Login or SignUp</div>
      
              <form>
      
                  <div class = "email">
                    <input class = "email" placeholder="E-Mail" name="email" required type="email" onInput={this.onInput} value={this.state.email}></input>
                  </div>
                  <div class = "password">
                    <input class="password" placeholder="Password" name="password" required type="password" onInput={this.onInput} value={this.state.password}></input>
                  </div>
                  <div class = "password">
                    <input class="password" placeholder="First Name" name="firstname" required type="name" onInput={this.onInput} value={this.state.firstname}></input>
                  </div>
                  <div class = "password">
                    <input class="password" placeholder="Last Name" name="lastname" required type="name" onInput={this.onInput} value={this.state.lastname}></input>
                  </div>
                  <div>
                    <input class = "aaa" type="submit" onClick={this.onSignUpClick} value="Sign Up"></input>
                  </div>
                
              </form>
              </div>
              <div className = "grid-j">
                </div>
            </div>
            </div>
          );
        }
      }

  export default SignUp;