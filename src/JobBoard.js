import React from 'react';
import './JobBoard.css';
// import Header from "./Header.js";
import HeaderJobs from "./HeaderJobs.js";
// import BriefCaseLogo from './briefcase.svg';
import CompanyLogo1 from './company1.svg';
import CompanyLogo2 from './company2.svg';
import CompanyLogo3 from './company3.svg';
// import { ContactsOutlined } from '@material-ui/icons';
import JobCard from './JobCard';

class JobBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        currJobs: [],
    } 

    this.addJobUpdate = this.addJobUpdate.bind(this);
    this.removeJobUpdate = this.removeJobUpdate.bind(this);
    
  }
  goHome = () => {
    this.props.history.push("/");
  }

  goMyJobs = () => {
    this.props.history.push({
      pathname: '/myJobs',
      myJobs: this.state.currJobs // objArray of jobs
    })
    
  }

  addJobUpdate = (data) => {
    this.setState({currJobs: this.state.currJobs.concat([data])});
    console.log("job added in parent");
    console.log(this.state.currJobs);
  }

  removeJobUpdate = (data) => {
    this.setState({currJobs: this.state.currJobs.filter(e => e.companyName != data.companyName)});
    console.log("job removed in parent");
    console.log(this.state.currJobs);
  }



  render() {
    let data = ['Aaron Alton', 'Providence', '5 years','$20','Master Electrician'];
    
    if (this.props.location.data != null) {
      data = this.props.location.data;
    } 
    
    const companies = [{name: 'Eastside Electric', logo: CompanyLogo1},{name: 'Prostar Energy', logo: CompanyLogo2},{name: 'Home Electric', logo: CompanyLogo3 }]

  

    return (
      <div className="jobboard">
        <div className="header-div">
        <HeaderJobs goToHome={this.goHome} goToMyJobs={this.goMyJobs}  page={"home"} myCurrJobs={this.state.currJobs}/>
        </div>
        <div className="main-area">
            <div className="sidebar">
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
                <JobCard curr_data={data} company={companies[0]} addingJob={this.addJobUpdate} removingJob={this.removeJobUpdate}/>
                <JobCard curr_data={data} company={companies[1]} addingJob={this.addJobUpdate} removingJob={this.removeJobUpdate}/>
                <JobCard curr_data={data} company={companies[2]} addingJob={this.addJobUpdate} removingJob={this.removeJobUpdate}/>
                </div>
                
                </div>
          </div>
        
      </div>
      );
  }
}

export default JobBoard;