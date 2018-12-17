import React, { Component } from 'react';
import './App.css';
import Events from './components/sections/Events'
import About from './components/sections/About'
import Partner from './components/sections/Partner';
import Sponsors from './components/sections/Sponsors';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Events />
          <About />
          <Partner />
          <Sponsors />
      </div>
    );
  }
}

export default App;
