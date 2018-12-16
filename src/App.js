import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Let's build the Product Go Landing Page with React.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
