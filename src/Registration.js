import React from 'react';
import './Registration.css';
import data from './data.json';
import Header from "./Header.js";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from '@material-ui/core/TextField';
import ProgressBar from './ProgressBar.js';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      currentPage:0,
      selected:["Aaron Alton","","","",""],
      visitedPage:[true, false, false, false,false],
      answer:"",
    }
    this.sections = ["profile","location","career","wage","license"];
    this.backPage = this.backPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.goToPage = this.goToPage.bind(this);
  }

  goHome = () => {
    this.props.history.push("/");
  }

  goLogin = () => {
    this.props.history.push("/login");
  }

  goSignUp = () => {
    this.props.history.push("/registration");
  }

  nextPage(){
    let next = this.state.currentPage + 1;
    this.setState({currentPage:next});
  }

  backPage(){
    let back = this.state.currentPage - 1;
    this.setState({currentPage:back});
  }

  goToPage(page){
    this.setState({currentPage:page});
  }

  goToSearch = () => {
    this.props.history.push({
      pathname: "/jobboard",
      data: this.state.selected
    });
  }

  handleAnswer = (e) => {
    let val = e.target.value;
    let index = this.state.currentPage;
    this.setState({answer:val});
    const newSelected = this.state.selected;
    newSelected[index] = val;
    this.setState({selected:newSelected});
    const newVisited = this.state.visitedPage;
    if (newVisited[index] === false) {
      newVisited[index] = true;
      this.setState({visitedPage:newVisited});
    }
  }

  handleSubmit() {
    const checkfalse = (element) => element === false;
    let button = "";
    //there is false
    if (this.state.visitedPage.some(checkfalse)) {
      button = <div className="login-button disable-button">finish</div>
    } else {
      button = <div className="login-button" onClick={this.goToSearch}>finish</div>
    }
    return button;
  }




  render() {
    let content = "";
    let currVal = this.state.selected[this.state.currentPage];
    let buttonText = "next";
    let buttonClick = this.nextPage;
    let nextButton = 
      <div className="login-button" onClick={buttonClick}>{buttonText}</div>;
    if (this.state.currentPage === 4){
      nextButton = this.handleSubmit();
    };
    if (this.state.currentPage === 0){
      content = 
      <div className="question-container">
        <ProgressBar goToPage={this.goToPage} currentPage ={this.state.currentPage} sections={this.sections}/>
        <div className="personalInfo">
          <div className="field">
            <TextField disabled id="standard-disabled" label="name" defaultValue="Aaron Alton" />
          </div>
          <div className="field">
            <TextField disabled id="standard-disabled" label="email" defaultValue="aalton@gmail.com" />
          </div>
          <div className="field">
            <TextField
            disabled
            id="standard-password-input"
            label="password"
            type="password"
            defaultValue="password"
          />
          </div>
        </div>
          <div className="buttons">
            <div className="goback_invisible">go back</div>
            <div className="login-button-container">
            {nextButton}
          </div>
          </div>
        </div>;
    } else {
      let question = data[this.state.currentPage-1].question;
      let first = data[this.state.currentPage-1].options[0];
      let second = data[this.state.currentPage-1].options[1];
      let third = data[this.state.currentPage-1].options[2];
      let index = this.state.currentPage;
      if (this.state.visitedPage[index] === false) {
        nextButton = <div className="login-button disable-button">{buttonText}</div>
      }
      content = 
      <div className="question-container">
          <ProgressBar goToPage={this.goToPage} currentPage ={this.state.currentPage} sections={this.sections}/>
          <div className="question">
            {question}
          </div>
          <div className="answer-container">
          <FormControl component="fieldset">
            <RadioGroup aria-label="questionaire" name="registration" value={currVal} onChange={this.handleAnswer}>
              <FormControlLabel value={first} control={<Radio color="primary"/>} label={first} />
              <FormControlLabel value={second} control={<Radio color="primary"/>} label={second} />
              <FormControlLabel value={third} control={<Radio color="primary"/>} label={third} />
            </RadioGroup>
          </FormControl>
          </div>
          <div className="registration-buttons">
            <div className="goback_visible" onClick={this.backPage}>go back</div>
            <div className="login-button-container">
            {nextButton}
          </div>
          </div>
        </div>;
    };

    return (
      <div className="registration">
        <Header goToHome={this.goHome} goToLogin={this.goLogin} goToSignUp={this.goSignUp}/>
        {content}
      </div>
    );
  }
}

export default Registration;