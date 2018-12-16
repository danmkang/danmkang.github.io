import React, { Component } from 'react';
import './App.css';
import Events from './components/sections/Events'
import About from './components/sections/About'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Events/>
          <About/>
      </div>
    );
  }
}

export default App;
