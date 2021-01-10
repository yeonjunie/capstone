import React, { Component } from 'react';
import HeaderJobs from "./HeaderJobs.js";
import './MyJobs.css';





class MyJobs extends Component {
  constructor(props) {
    super(props);
    this.state={
      myCurrJobs: this.props.location.myJobs,
    }

  }

    goHome = () => {
      this.props.history.push("/jobboard");
      // this.props.history.push({
      //   pathname: '/jobboard',
      //   myJobs: this.state.currJobs // objArray of jobs
      // })
    }
  
    goMyJobs = () => {
      this.props.history.push("/myJobs");
    }



  render() {
    // let myCurrJobs = this.props.location.myJobs;
    return (      
      <div className="myJobs">
      <div className="header-div">
      <HeaderJobs goToHome={this.goHome} goToMyJobs={this.goMyJobs}  page={"home"} myCurrJobs={this.state.myCurrJobs}/>
      </div>
      <div className="main-area">
      <div className="recommended-div">
      <div className="recommended-jobs-header">{"My Job Applications ("+this.state.myCurrJobs.length+")"}</div>
      </div>
      </div>
      </div>
          
       
   );
  }
}

export default MyJobs;