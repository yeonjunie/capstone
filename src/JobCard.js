import React from 'react';
import './JobCard.css';
import Header from "./Header.js";
import BriefCaseLogo from './briefcase.svg';
import CompanyLogo1 from './company1.svg';
import { ContactsOutlined } from '@material-ui/icons';

class JobCard extends React.Component {
//   goHome = () => {
//     this.props.history.push("/");
//   }

//   goLogin = () => {
//     this.props.history.push("/login");
//   }

//   goSignUp = () => {
//     this.props.history.push("/registration");
//   }

// //   goMyJobs = () => {
// //       this.props.history.push("/myjobs");
// //   }
  render() {
    const data = this.props.curr_data;
    const company= this.props.company
    console.log(data);
    
    return (

            <div className="job-card">
                <div className="logo-col">
                    {/* <h1>Logo Here</h1> */}
                    {/* <div className="image-div"> */}
                    <img className="company-logo" src={company.logo} alt="Company Logo"/>
                    {/* </div> */}
                    {/* <div className="company-logo">
                        
                    </div> */}
                    
                </div>
                <div className="job-desc-col">
                  {/* <div className ="company-logo"/> */}
                  <div className="job-title">{data[4]}</div>
                  <div className="job-company">{company.name}</div>
                  <div className="job-desc">{data[1]} <br/>$36/hour <br/> {data[2]  + " experience"} <br/> {data[4] + " State License Required"}</div>
                  

                </div>
                <div className="share-profile-col">
                    <div className="share-profile-button"> <img className="briefcase-logo" src={BriefCaseLogo} />  Share Profile</div>
                      
                </div>
                
                
            </div>

      );
  }
}

export default JobCard;