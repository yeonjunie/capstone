import React from 'react';
import './JobCard.css';
import BriefCaseLogo from './briefcase.svg';
import CheckMarkLogo from './checkmark.svg';


class JobCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            profileShared: this.props.profileShared,
            data: this.props.curr_data,
            company: this.props.company,
            jobBoardFlag: this.props.bool
            // addingJob: this.props.addingJob,
            // removingJob: this.props.removingJob
        } 
        this.addJob = this.addJob.bind(this);
        this.removeJob = this.removeJob.bind(this);
      }

    shareProfile() {
        if (this.state.jobBoardFlag) {//dealing with JobCard in Jobboard
        if (this.state.profileShared) {
            return(<div className="share-profile-col"><div className="profile-shared-button" onClick={this.removeJob}> <img className="briefcase-logo" src={CheckMarkLogo} />Profile Shared</div>
            <div className="profile-shared-desc">{this.state.company.name +" " +"  will reach out if there’s a fit!"}</div></div>)
            

        } else {
            return(<div className="share-profile-col"><div className="share-profile-button" onClick={this.addJob}> <img className="briefcase-logo" src={BriefCaseLogo} /> Share Profile</div> </div>)

        }
    } else {
        let today = new Date()
        let todayMonth = today.toLocaleString('default', { month: 'short' });
        let todayDate = today.getDate();
        return(<div className="myJobs-desc"><p><strong>{"Profile Shared on "+ todayMonth + " " + todayDate} </strong></p><p>{this.state.company.name + "will reach out if there’s a fit!"}</p></div>)
    }
    }

    addJob() {
        this.setState({profileShared: true});
        let sendData = {jobTitle: this.state.data[4],companyName: this.state.company.name,location: this.state.data[1],wage: this.state.data[3],yoe: this.state.data[2]};
        this.props.addingJob(sendData);
        //update myJobsCount
    }
    removeJob() {
        this.setState({profileShared: false});
        let sendData = {jobTitle: this.state.data[4],companyName: this.state.company.name,location: this.state.data[1],wage: this.state.data[3],yoe: this.state.data[2]};
        this.props.removingJob(sendData);
        //update myJobsCount
    }
  render() {

    
    return (

            <div className="job-card">
                <div className="logo-col">
                    <img className="company-logo" src={this.state.company.logo} alt="Company Logo"/>
                    
                </div>
                <div className="job-desc-col">
                  <div className="job-title">{this.state.data[4]}</div>
                  <div className="job-company">{this.state.company.name}</div>
                  <div className="job-desc">{this.state.data[1]} <br/> {this.state.data[3]} <br/> {this.state.data[2]  + " experience"} <br/> {this.state.data[4] + " State License Required"}</div>
                  

                </div>
                
                {this.shareProfile()}
                      
                
                
                
            </div>

      );
  }
}

export default JobCard;