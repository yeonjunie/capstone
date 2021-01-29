import React, { Component } from 'react';
import HeaderJobs from "./HeaderJobs.js";
import './CompanyPage.css';
import coverPhoto from './cover_photo.jpg';






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
              <div className="back" onClick={this.onClickBack}>{"Back to "+ this.backToText()}</div> 
              <div className="company-summary"></div>
          </div>
          <div className="info">
              <div className="about">
              <div className="website"></div>
              <div className="contact"></div>

              </div>
              <div className="description-area">
              <div className="description">
              <div className="description-header"></div>
              <div className="description-text"></div>
                  
                  </div>
                  <div className="job-postings-area">
                      <div className="job-postings-header"></div>
                      <div className="job-postings-row"></div>
                  
              </div>
                  
              </div>
          </div>

      </div>
      </div>
          
       
   );
  }
}

export default CompanyPage;