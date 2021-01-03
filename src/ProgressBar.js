import React from 'react';
import './Registration.css';
import ProgressCircle from './ProgressCircle.js';

class ProgressBar extends React.Component {
  renderCircles(){
    return (this.props.sections.map((data, index)=> {
      return (<ProgressCircle
        section = {data}
        goToPage = {this.props.goToPage}
        index = {index}
        currentPage = {this.props.currentPage}
        isCurrentPage = {this.props.currentPage === index}
        />)
    }));
  }
  render() {
    return (
      <div className="progressBar">
        <div className="progressLine"/>
        {this.renderCircles()}
      </div>
    );
  }
}

export default ProgressBar;