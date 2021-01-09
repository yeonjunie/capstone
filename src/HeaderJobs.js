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
    let goSettings = this.props.goToSettings;
    return (
      <div className="header">
        <div className="header__content">
          <div className="logo" onClick={goHome}> Electry </div>
          <div className="settings">
            <img src={myJobs}  />
            <div className="between">
            
          
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderJobs;