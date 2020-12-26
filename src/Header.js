import React from 'react';
import './Header.css';

class Header extends React.Component {

  constructor(props) {
      super(props);
  };

  render() {
    let goHome = this.props.goToHome;
    let goSignUp = this.props.goToSignUp;
    let goLogin = this.props.goToLogin;
    return (
      <div className="header">
        <div className="header__content">
          <div className="logo" onClick={goHome}> Electry </div>
          <div className="settings">
            <div class="signup_button" onClick={goSignUp}> Sign Up </div>
            <div className="between">
            <div class="login_button" onClick={goLogin}> Login </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;