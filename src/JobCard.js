import React from 'react';
import './JobCard.css';
import BriefCaseLogo from './briefcase.svg';
import CheckMarkLogo from './checkmark.svg';


class JobCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            profileShared: false,
        } 
        this.addJob = this.addJob.bind(this);
        this.removeJob = this.removeJob.bind(this);
      }

    shareProfile(companyName) {
        if (this.state.profileShared) {
            return(<div className="share-profile-col"><div className="profile-shared-button" onClick={this.removeJob}> <img className="briefcase-logo" src={CheckMarkLogo} />Profile Shared</div>
            <div className="profile-shared-desc">{companyName + " will reach out if there’s a fit!"}</div></div>)
            

        } else {
            return(<div className="share-profile-col"><div className="share-profile-button" onClick={this.addJob}> <img className="briefcase-logo" src={BriefCaseLogo} /> Share Profile</div> </div>)

        }
    }

    addJob() {
        this.setState({profileShared: true});
        //update myJobsCount
    }
    removeJob() {
        this.setState({profileShared: false});
        //update myJobsCount
    }
  render() {
    const data = this.props.curr_data;
    const company= this.props.company
    console.log(data);
    
    return (

            <div className="job-card">
                <div className="logo-col">
                    <img className="company-logo" src={company.logo} alt="Company Logo"/>
                    
                </div>
                <div className="job-desc-col">
                  <div className="job-title">{data[4]}</div>
                  <div className="job-company">{company.name}</div>
                  <div className="job-desc">{data[1]} <br/> {data[3]} <br/> {data[2]  + " experience"} <br/> {data[4] + " State License Required"}</div>
                  

                </div>
                {this.shareProfile(company.name)}
                      
                
                
                
            </div>

      );
  }
}

export default JobCard;