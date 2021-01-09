import React from 'react';
import './HeaderJobs.css';
import myJobs from './briefcase-solid.svg';
import settings from './setting-solid.svg'

class HeaderJobs extends React.Component {

  constructor(props) {
      super(props);
  };

  render() {
    let goHome = this.props.goToHome;
    let goMyJobs = this.props.goToMyJobs;
   
    return (
      <div className="header">
        <div className="header__content">
          <div className="logo" onClick={goHome}> Electry </div>
          <div className="settings">
            <img src={myJobs} onclick={goMyJobs} />
            <div className="between">
            
          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderJobs;