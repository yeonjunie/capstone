import React from 'react';
import './Login.css';
import Header from "./Header.js";
import TextField from '@material-ui/core/TextField';

class Login extends React.Component {
  goHome = () => {
    this.props.history.push("/");
  }

  goLogin = () => {
    this.props.history.push("/login");
  }

  goSignUp = () => {
    this.props.history.push("/registration");
  }
  render() {
    return(
      <div className="login">
        <Header goToHome={this.goHome} goToLogin={this.goLogin} goToSignUp={this.goSignUp}/>
        <div className="white">
          <div className="welcomeback">
            welcome back
          </div>
          <form className="login-form" noValidate autoComplete="off">
            <div>
              <TextField id="standard-required" label="username" />
            </div>
            <div className="password">
              <TextField id="standard-password-input" type="password" label="password" />
            </div>
        </form>
        <div className="login-button-container">
          <div className="login-button">login</div>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;