import React from 'react';
import './LoginPage.css';
import NavBar from './NavBar';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    fetch('/api/users/me').then(user => {
      if (user.status === 200) {
        fetch('./name').then(name => {
        localStorage.setItem('user', JSON.stringify(name));
        window.location = '/';
      })
      }
    });
  }

  onInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLoginClick = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('/api/sessions', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if (res.status === 204) {
        fetch('api/users/name').then(res => res.json()).then(name => {
        localStorage.setItem('user', name.firstname);
        window.location = '/';
      })
      }
    });
  }

  onSignupClick = e => {
    e.preventDefault();
    return(
      window.location = './signup'
    )
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
            <div>
              <input class = "aaa" type="submit" onClick={this.onLoginClick} value="Login"></input>
            </div>
          
        </form>
        <div class = "aaa5">
          <input class = "aaa3" type = "button" onClick={this.onSignupClick} name = "text" value="New User? Register Here"></input>
        </div>
        </div>
        <div className = "grid-j">
          </div>
      </div>
      </div>
    );
  }
}

export default LoginPage;
