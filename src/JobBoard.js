import React from 'react';
import './JobBoard.css';
import Header from "./Header.js";
import BriefCaseLogo from './briefcase.svg';
import CompanyLogo1 from './company1.svg';
import CompanyLogo2 from './company2.svg';
import CompanyLogo3 from './company3.svg';
import { ContactsOutlined } from '@material-ui/icons';
import JobCard from './JobCard';

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

  render() {
    const data = this.props.location.data;
    console.log(data);
    // make obj array of the 3 companies 
    const companies = [{name: 'Eastside Electric', logo: CompanyLogo1},{name: 'Prostar Energy', logo: CompanyLogo2},{name: 'Home Electric', logo: CompanyLogo3 }]
    //make a obj array of wages depending on selection
    const wage = [];

    return (
      <div className="jobboard">
        <Header goToHome={this.goHome} goToLogin={this.goLogin} goToSignUp={this.goSignUp} page={"home"}/>
        <div className="sidebar">
            
            {/* OnClick take user back to form editing */}
                <div className="edit">edit</div> 

                <div className="profile-pic"></div>
                <div className="my-profile-header">My Profile</div>
                <div className="expertise">Expertise: Electronics</div>
                <div className="location">{"Location: " + data[1]}</div>
                
                <div className="yoe">{"Years of Experience: " + data[2]}</div>
                
                <div className="min-wage">{"Minimum Wage: " + data[3]}</div>
                
                <div className="license">{"License: " + data[4]}</div>
              
        </div>
        <div className="main-area">

            <div className="recommended-jobs-header">Recommended Jobs</div>
            <JobCard curr_data={data} company={companies[0]}/>
            <JobCard curr_data={data} company={companies[1]}/>
            <JobCard curr_data={data} company={companies[2]}/>
            </div>
        
      </div>
      );
  }
}

export default JobBoard;