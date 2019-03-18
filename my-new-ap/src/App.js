import React, { Component } from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Eason from './Eason';
import Notobook from './Notobook';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
           <Route exact path = "/" component = {Home} />
           <Route path = "/Eason" component = {Eason} />
           <Route path = "/Notobook" component = {Notobook} />
        </div>
      </Router>
    );
  }
}

export default App;
