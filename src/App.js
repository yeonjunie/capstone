import logo from './logo.svg';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollToTop from "./ScrollToTop.js";
import Home from "./Home.js";
import Login from "./Login.js";
import Registration from "./Registration.js";
import JobBoard from "./JobBoard.js";
import MyJobs from "./MyJobs.js"
import CompanyPage from "./CompanyPage.js"




class App extends Component {
  render() {
    return (      
      <BrowserRouter>
      <ScrollToTop />
       <div>
           <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login}/>
            <Route path="/registration" component={Registration}/>
            <Route path="/jobboard" component={JobBoard}/>
            <Route path="/myJobs" component={MyJobs}/>
            <Route path="/company" component={CompanyPage}/>
            
          </Switch>
       </div> 
     </BrowserRouter>
   );
  }
}

export default App;
