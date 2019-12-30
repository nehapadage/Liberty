import React, { Component } from 'react';
import libertyPage from './Components/libertyPage'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">

          <Router>
             <Route path="/" exact component={libertyPage} />
          </Router>
    
  </div> 
)}
}

export default App;
