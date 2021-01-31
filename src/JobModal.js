import React from 'react';
import './JobModal.css';
import CloseLogo from './close_icon.svg';


class JobCard extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show: this.props.show,
            handleClose: this.props.handleClose,
            children: this.props.children,
            jobData: this.props.jobData,
            companyData: this.props.companyData,

            // addingJob: this.props.addingJob,
            // removingJob: this.props.removingJob
        } 
        this.showHideClassName = this.showHideClassName.bind(this);

      }

      showHideClassName  = () => {
        if (this.state.show){
            return "modal display-block";
        } else {
            return "modal display-none";
        }
      };
      componentWillReceiveProps(nextProps) {
        this.setState({ show: nextProps.show });  
        this.setState({ jobData: nextProps.jobData });  
        this.setState({ companyData: nextProps.companyData }); 
      }

    //   componentWillReceiveProps(nextProps) {
        
    //   }

  render() {

    console.log(this.state.jobData);
    console.log(this.state.companyData);
    return (
    <div className={this.showHideClassName()}>
      <section className="modal-main">
        {this.state.children}
        <div className="close-container">
        <img className="close-logo"  onClick={this.state.handleClose} src={CloseLogo} />
        </div>
        <div className="logo-container">
        <img className="company-logo-modal" src={this.state.companyData.logo} alt="Company Logo"/>
        </div>
        <div className="job-title-modal">{this.state.jobData[4]}</div>
        <div className="job-company-modal">{this.state.companyData.name}</div>
        <div className="overview-container">
        <div className="overview-header">Overview</div>
            <div className="overview-description">
            <br/>
               {this.state.jobData[1]+", RI"} <br/>  
                {this.state.jobData[3]+"/hr"} <br/>  
                {this.state.jobData[2]+" of experience required"} <br/> 
                {this.state.jobData[4]+" State License Required"} <br/>
                
            
        </div>

        </div>

        <div className="description-container">
        <div className="description-header">Description</div>
            <div className="description">Curabitur sit amet lorem cursus, commodo dolor non, consequat lorem. Vivamus at purus vitae metus sodales venenatis eget at dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla lacinia mollis lacus ac pretium. Praesent turpis lectus, mollis a nibh non, molestie pulvinar magna. Suspendisse at ex sollicitudin, varius mi at, scelerisque tellus. Sed blandit justo ex, sit amet tincidunt nulla accumsan nec.


            
        </div>
        </div>
      </section>
    </div>

      );
  }
}

export default JobCard;