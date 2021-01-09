import React from 'react';
import './JobBoard.css';
import Header from "./Header.js";
import HeaderJobs from "./HeaderJobs.js";
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

  goMyJobs = () => {
    this.props.history.push("/myJobs");
  }



  render() {
    let data = ['Aaron Alton', 'Providence', '5 years','$20','Master Electrician'];
    
    if (this.props.location.data != null) {
      data = this.props.location.data;
    } 
    
    console.log(data);
    // make obj array of the 3 companies 
    const companies = [{name: 'Eastside Electric', logo: CompanyLogo1},{name: 'Prostar Energy', logo: CompanyLogo2},{name: 'Home Electric', logo: CompanyLogo3 }]

  

    return (
      <div className="jobboard">
        <div className="header-div">
        <HeaderJobs goToHome={this.goHome} goToMyJobs={this.goMyJobs}  page={"home"}/>
        </div>
        <div className="main-area">
            <div className="sidebar">
                
                {/* OnClick take user back to form editing */}
                <div className="edit-row">
                    <div className="edit">edit</div> 
                </div>
                  <div className="profile-row">
                    <div className="profile-pic"></div>
                    <div className="my-profile-header">My Profile</div>
                  </div>
                  <div className="preferences-div">
                    <div className="expertise">Expertise: Electronics</div>
                    <div className="location">{"Location: " + data[1]}</div>
                    
                    <div className="yoe">{"Years of Experience: " + data[2]}</div>
                    
                    <div className="min-wage">{"Minimum Wage: " + data[3]}</div>
                    
                    <div className="license">{"License: " + data[4]}</div>
                    </div>
                  
                </div>
                <div className="job-area">
                <div className="recommended-div">
                <div className="recommended-jobs-header">Recommended Jobs</div>
                </div>
                <div className="jobs-div">
                <JobCard curr_data={data} company={companies[0]}/>
                <JobCard curr_data={data} company={companies[1]}/>
                <JobCard curr_data={data} company={companies[2]}/>
                </div>
                
                </div>
          </div>
        
      </div>
      );
  }
}

export default JobBoard;