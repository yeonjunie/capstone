import React, { Component } from 'react';
import HeaderJobs from "./HeaderJobs.js";
import './CompanyPage.css';
import coverPhoto from './cover_photo.jpg';
import GoToLogo from './goToLogo.svg';






class CompanyPage extends Component {
  constructor(props) {
    super(props);
    this.state={
        myCurrJobs: this.props.location.myJobs,
        fromJobBoard: this.props.location.jobBoardFlag,
        companyInfo: this.props.location.companyInfo,
    }

    this.onClickBack = this.onClickBack.bind(this);
    this.backToText = this.backToText.bind(this);
  }

  goJobBoard = () => {
    // this.props.history.push("/jobboard");
    // console.log(this.state.myCurrJobs);
    this.props.history.push({
      pathname: '/jobboard',
      myJobs: this.state.myCurrJobs // objArray of jobs
    })
  }

  goMyJobs = () => {
    // this.props.history.push("/myJobs");
    this.props.history.push({
        pathname: '/myJobs',
        myJobs: this.state.myCurrJobs // objArray of jobs
      })
  }

  backToText = () => {
      if (this.props.location.jobBoardFlag) {
          return "Job Board"
      } else {
          return "My Jobs"
      }
  }

  onClickBack = () => {
    if (this.props.location.jobBoardFlag) {
        this.goJobBoard();
    } else {
        this.goMyJobs();
    }
  }

 





render() {

    return (      
      <div className="company-page">
      <div className="header-div">
      <HeaderJobs goToHome={this.goJobBoard} goToMyJobs={this.goMyJobs}  page={"home"} myCurrJobs={this.state.myCurrJobs}/>
      </div>
      <div className="main">
          <div className="banner" style={{background: 'url('+coverPhoto+')'}}>
              {/* set back so that depending on boolean you go back to that */}
              <div className="back" onClick={this.onClickBack}>{ " ← Back to "+ this.backToText()}</div> 
              <div className="company-summary">
              <img className="company-logo" src={this.state.companyInfo.logo} alt="Company Logo"/>
              <div className="company-name">
                  {this.state.companyInfo.name}
              </div>
              <p>
                  electrical installations &amp; repairs
              </p>
              <div className="company-short-info">
                  <br/>
                  <div className="company-location">Providence,<br/> Rhode Island</div>
                  <div className="company-employees"> 120 <br/>Employees</div>

              </div>

              </div>
          </div>
          <div className="info">
              <div className="about"> About
              <div className="website">Website <img className="gotologo" src={GoToLogo} /></div>
              <div className="contact">Contact <img className="gotologo" src={GoToLogo} /></div>

              </div>
              <div className="description-area">
              <div className="description">
              <div className="description-header">Description</div>
              <div className="description-text">Curabitur sit amet lorem cursus, commodo dolor non, consequat lorem. Vivamus at purus vitae metus sodales venenatis eget at dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla lacinia mollis lacus ac pretium. Praesent turpis lectus, mollis a nibh non, molestie pulvinar magna. Suspendisse at ex sollicitudin, varius mi at, scelerisque tellus. Sed blandit justo ex, sit amet tincidunt nulla accumsan nec.
                  </div>
                  
                  </div>
                  <div className="job-postings-area">
                      <div className="job-postings-header">Job Postings</div>
                      <div className="job-postings-row">
                          <div className="job-posting">
                          <img className="posting-company-logo" src={this.state.companyInfo.logo} alt="Company Logo"/>
                          <div className="posting-job-title">Apprentice Electrician</div>
                          <div className="posting-yoe">1+ years of Experience</div>
                          </div>

                          <div className="job-posting">
                          <img className="posting-company-logo" src={this.state.companyInfo.logo} alt="Company Logo"/>
                          <div className="posting-job-title">Journeyman Electrician</div>
                          <div className="posting-yoe">3+ years of Experience</div>
                          </div>

                          <div className="job-posting">
                          <img className="posting-company-logo" src={this.state.companyInfo.logo} alt="Company Logo"/>
                          <div className="posting-job-title">Master Electrician</div>
                          <div className="posting-yoe">5+ years of Experience</div>
                          </div>
                      </div>
                  
              </div>
                  
              </div>
          </div>

      </div>
      </div>
          
       
   );
  }
}

export default CompanyPage;