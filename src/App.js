import React, { Component } from 'react';
import './App.css';
import Events from './components/sections/Events'
import About from './components/sections/About'
import Partner from './components/sections/Partner';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Events />
          <About />
          <Partner />
      </div>
    );
  }
}

export default App;
