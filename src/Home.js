import React from 'react';
import './Home.css';
import Header from "./Header.js";

class Home extends React.Component {
  goHome = () => {
    this.props.history.push("/"); 
    // change to "/jobboard" to test JobBoard page
  }
  goLogin = () => {
    this.props.history.push("/login");
  }

  goSignUp = () => {
    this.props.history.push("/registration");
  }
  render() {
    return (
      <div className="home">
        <Header goToHome={this.goHome} goToLogin={this.goLogin} goToSignUp={this.goSignUp} page={"home"}/>
        <div className="welcome">welcome</div>
        <div className="welcome-desc">Join our network of electricians, mechanics and much more</div>
        <div className="survey-desc">Fill out a <b>3 minute survey</b> to find out where you’re needed!</div>
        <div className="registration-component">
        <div className="registration-button" onClick={this.goSignUp}>        
          <div className="registration-desc">click here to get started</div>
        </div>
      </div>
      <div className="background-img-container">
        <img className="main-img" src="https://i.ibb.co/Jj5N77W/Screen-Shot-2020-12-27-at-17-23-04.png"/>
      </div>
      <div className="footer">made with love by Yeon Jun Kim and Snigdha Sinha</div>
      </div>
      );
  }
}

export default Home;