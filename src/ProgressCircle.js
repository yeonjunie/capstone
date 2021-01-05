import React from 'react';
import './Registration.css';

class ProgressCircle extends React.Component {
  renderCircle() {
    let comp = "";
    let title = this.props.section;
    if (this.props.isCurrentPage) {
      comp = 
      <div className="circle-container">
        <div className="circle-filled"/>
        <div className ="circle-desc"><b>{title}</b></div>
      </div>;
    } else {
      if (this.props.currentPage > this.props.index) {
        comp = 
          <div className="circle-container">
            <div className="circle-filled" onClick={() => this.props.goToPage(this.props.index)}/>
            <div className ="circle-desc">{title}</div>
          </div>;
      } else {
        comp = 
        <div className="circle-container">
          <div className="circle" onClick={() => this.props.goToPage(this.props.index)}/>
          <div className ="circle-desc">{title}</div>
        </div>;
      }
    }
    return comp;
  }
  render() {
    return(
      <div>{this.renderCircle()}</div>
    );
  }
}

export default ProgressCircle;