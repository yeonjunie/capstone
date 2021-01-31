import React, { Component } from 'react';
import HeaderJobs from "./HeaderJobs.js";
import JobCard from "./JobCard.js";
import './MyJobs.css';
import CompanyLogo1 from './company1.svg';
import CompanyLogo2 from './company2.svg';
import CompanyLogo3 from './company3.svg';
import JobModal from './JobModal.js';





class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state={
      myCurrJobs: this.props.location.myJobs,
      show: false,
      currJobData: [],
      currCompany: [],
      
    }
    this.renderJobs = this.renderJobs.bind(this);
    this.goCompanyPage = this.goCompanyPage.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }

  showModal = (jobData, company) => {
    this.setState({ show: true });
    this.setState({ currJobData: jobData });
    this.setState({ currCompany: company });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  

    goJobBoard = () => {
      // this.props.history.push("/jobboard");
      console.log(this.state.myCurrJobs);
      this.props.history.push({
        pathname: '/jobboard',
        myJobs: this.state.myCurrJobs // objArray of jobs
      })
    }
  
    goMyJobs = () => {
      this.props.history.push("/myJobs");
    }

    goCompanyPage = (info) => {
      this.props.history.push({
        pathname: '/company',
        myJobs: this.state.myCurrJobs, // objArray of jobs
        companyInfo: info,
        jobBoardFlag: false,
      })
  
    }

    renderJobs = (jobArray) => {
      let result = [];
      for (var value of jobArray) {
        let currData = ['Aaron Alton',value.location, value.yoe,value.wage,value.jobTitle];
        let currCompany = {};
        if (value.companyName == "Eastside Electric") {
          currCompany = {name: "Eastside Electric", logo: CompanyLogo1 };

        } else if (value.companyName == "Prostar Energy"){
          currCompany = {name: "Prostar Energy", logo: CompanyLogo2 };

        } else {
          currCompany = {name: "Home Electric", logo: CompanyLogo3 };
        }
        result.push(<JobCard curr_data={currData} company={currCompany} bool={false} goCompany={this.goCompanyPage} showModal={this.showModal}/>);
        
      }
      return result;

    }



  render() {
    
   
    
    if(this.state.myCurrJobs == null){
      this.state.myCurrJobs = [];
      
    }
    return (      
      <div className="myJobs">
      <div className="header-div">
      <HeaderJobs goToHome={this.goJobBoard} goToMyJobs={this.goMyJobs}  page={"home"} myCurrJobs={this.state.myCurrJobs}/>
      </div>
      <div className="main">
      <JobModal show={this.state.show} handleClose={this.hideModal} jobData={this.state.currJobData} companyData={this.state.currCompany}>

</JobModal>
      <div className="recommended-div">
      <div className="back-to" onClick={this.goJobBoard}> &larr; Back to Job Board</div>
      <div className="recommended-jobs-header">{"My Job Applications ("+this.state.myCurrJobs.length+")"}</div>
      </div>
      {/* Render the Job Card */}
      <div className="jobs-div">
      <ul>{this.renderJobs(this.state.myCurrJobs)}</ul>
      </div>
      </div>
      </div>
          
       
   );
  }
}

export default MyJobs;