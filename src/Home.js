import React from 'react';
import './Home.css';
import Header from "./Header.js";

class Home extends React.Component {
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
    return (
      <Header goToHome={this.goHome} goToLogin={this.goLogin} goToSignUp={this.goSignUp} page={"home"}/>
    );
  }
}

export default Home;