import React from 'react';
import './JobBoard.css';
import Header from "./Header.js";
import BriefCaseLogo from './briefcase.svg';
import CompanyLogo1 from './company1.svg';

class JobBoard extends React.Component {
  goHome = () => {
    this.props.history.push("/");
  }

  goLogin = () => {
    this.props.history.push("/login");
  }

  goSignUp = () => {
    this.props.history.push("/registration");
  }

//   goMyJobs = () => {
//       this.props.history.push("/myjobs");
//   }
  render() {
    return (
      <div className="jobboard">
        <Header goToHome={this.goHome} goToLogin={this.goLogin} goToSignUp={this.goSignUp} page={"home"}/>
        <div className="sidebar">
            {/* <div> */}
                <div className="edit">edit</div>
                <div className="profile-pic"></div>
                <div className="my-profile-header">My Profile</div>
                <div className="expertise">Expertise: "Electronic"</div>
                {/* Replace key-info-desc with function to keep track of selections 
                + make it reponsive*/}
                <div className="location">Location: "Providence, RI"</div>
                
                <div className="yoe">Years of Experience: "5+ Years"</div>
                
                <div className="min-wage">Minimum Wage: "$20-40/hour"</div>
                
                <div className="license">License: "Master Electrician"</div>
                

            {/* </div> */}
        </div>
        <div className="main-area">
            <div className="recommended-jobs-header">Recommended Jobs</div>
            <div className="job-card">
                <img className="company-logo" src={CompanyLogo1} alt="Eastside Electric Logo"/>
                <div className ="company-logo"/>
                <div className="job-title">Master Electrician</div>
                <div className="job-company">Eastside Electric</div>
                <div className="job-desc">Providence, RI <br/>$36/hour <br/> 7+ years experience <br/> Master Electrician State License Required</div>
                <div className="share-profile-button">  Share Profile</div>
                <img className="briefcase" src={BriefCaseLogo} alt="briefcase"/>
                
                
            </div>
            

            </div>
        
      </div>
      );
  }
}

export default JobBoard;