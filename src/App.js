import React, { Component } from 'react';
import './App.css';
import Events from './components/sections/Events'
import About from './components/sections/About'
import Partner from './components/sections/Partner';
import Sponsors from './components/sections/Sponsors';
import Contact from './components/sections/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Events />
          <About />
          <Partner />
          <Sponsors />
          <Contact />
      </div>
    );
  }
}

export default App;
